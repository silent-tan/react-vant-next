import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

import { Project } from "ts-morph";
import { describe, expect, it } from "vitest";

describe("探索 ts-morph 的 getStatementsWithComments 方法", () => {
  // 创建临时文件工具函数
  function createTempSourceFile(project: Project, content: string): string {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "ts-morph-test-"));
    const filePath = path.join(tempDir, "test-file.ts");
    fs.writeFileSync(filePath, content);
    project.addSourceFileAtPath(filePath);
    return filePath;
  }

  it("应该能获取文件中的所有语句和注释", () => {
    const project = new Project();
    const content = `
// 这是一个文件级注释
import { something } from 'somewhere';

/**
 * 这是一个多行 JSDoc 注释
 */
export const variable1 = 'value1';

// 这是一个单行注释
export const variable2 = 'value2';

export const variable3 = 'value3'; // 这是一个行尾注释

/* 这是一个多行注释
 * 第二行
 */
export function someFunction() {
  return true;
}

// @ignore-export
export const ignoreMe = 'should be ignored';
`;

    const filePath = createTempSourceFile(project, content);
    const sourceFile = project.getSourceFile(filePath);

    if (!sourceFile) {
      throw new Error("无法获取源文件");
    }

    // 获取所有语句及注释
    const statementsWithComments = sourceFile.getStatementsWithComments();

    console.log("语句及注释总数:", statementsWithComments.length);

    // 打印每个语句或注释的类型和内容
    statementsWithComments.forEach((item: any, index: number) => {
      const kind = item.kind || (item.getKindName ? item.getKindName() : "Unknown");
      const text = item.text || (item.getText ? item.getText() : "No text available");
      const pos = item.getStart ? item.getStart() : "No position";

      console.log(`项目 ${index}:`);
      console.log(`  类型: ${kind}`);
      console.log(`  位置: ${pos}`);
      console.log(`  内容: ${text.split("\\n")[0].substring(0, 50)}${text.length > 50 ? "..." : ""}`);
      console.log("---");
    });

    // 测试注释和语句的关系
    let commentIndex = -1;
    let statementIndex = -1;

    for (let i = 0; i < statementsWithComments.length; i++) {
      const item = statementsWithComments[i];

      // 找到 @ignore-export 注释
      if (item.getText() && item.getText().includes("@ignore-export")) {
        commentIndex = i;
      }

      // 找到 ignoreMe 变量声明
      if (item.getText() && item.getText().includes("ignoreMe")) {
        statementIndex = i;
      }
    }

    console.log("包含 @ignore-export 的注释索引:", commentIndex);
    console.log("包含 ignoreMe 的语句索引:", statementIndex);

    // 验证注释在语句之前
    expect(commentIndex).toBeGreaterThan(-1);
    expect(statementIndex).toBeGreaterThan(-1);
    expect(commentIndex).toBeLessThan(statementIndex);

    // 清理临时文件
    try {
      fs.unlinkSync(filePath);
      fs.rmdirSync(path.dirname(filePath));
    }
    catch (error) {
      console.error("清理临时文件失败:", error);
    }
  });

  it("test getExportedDeclarations", () => {
    const project = new Project();
    const content = `
// 注释1
// 注释2
export const var1 = 'value1';

export const var2 = 'value2';
// 这个注释不应该与上面的导出关联

// @ignore-export
export const var3 = 'value3';

/**
 * 多行 JSDoc
 * @ignore-export
 */
export const var4 = 'value4';

export const var5 = 'value5'; // @ignore-export 行尾注释

/* 块注释
 * @ignore-export
 */
export const var6 = 'value6';

// 空行后的注释
// @ignore-export

export const var7 = 'value7';

// 导出类型
export type MyType = string;

// 导出接口
export interface MyInterface {
  prop: string;
}

// 导出类
export class MyClass {
  method() {}
}

// 导出函数
export function myFunction() {
  return true;
}

// 默认导出
export default function defaultFunction() {
  return 'default';
}
`;

    const filePath = createTempSourceFile(project, content);
    const sourceFile = project.getSourceFile(filePath);

    if (!sourceFile) {
      throw new Error("无法获取源文件");
    }

    // 获取所有导出的声明
    const exportedDeclarations = sourceFile.getExportedDeclarations();

    console.log("导出声明总数:", exportedDeclarations.size);

    // 打印每个导出声明的名称和类型
    exportedDeclarations.forEach((declarations, name) => {
      console.log(`导出名称: ${name}`);
      console.log(`  声明数量: ${declarations.length}`);

      declarations.forEach((declaration, index) => {
        const kindName = declaration.getKindName();
        const text = declaration.getText();

        // 行信息
        const line = declaration.getStartLineNumber();

        console.log(`  声明 ${index + 1}:`);
        console.log(`    类型: ${kindName}`);
        console.log(`    文本: ${text.split("\n")[0].substring(0, 50)}${text.length > 50 ? "..." : ""}`);
        console.log(`    行: ${line}`);
      });
    });

    // 验证导出声明
    expect(exportedDeclarations.size).toBeGreaterThan(0);

    // 验证变量导出
    expect(exportedDeclarations.has("var1")).toBe(true);
    expect(exportedDeclarations.has("var2")).toBe(true);
    expect(exportedDeclarations.has("var3")).toBe(true);
    expect(exportedDeclarations.has("var4")).toBe(true);
    expect(exportedDeclarations.has("var5")).toBe(true);
    expect(exportedDeclarations.has("var6")).toBe(true);
    expect(exportedDeclarations.has("var7")).toBe(true);

    // 验证类型导出
    expect(exportedDeclarations.has("MyType")).toBe(true);
    expect(exportedDeclarations.has("MyInterface")).toBe(true);
    expect(exportedDeclarations.has("MyClass")).toBe(true);
    expect(exportedDeclarations.has("myFunction")).toBe(true);
    expect(exportedDeclarations.has("default")).toBe(true);

    // 检查类型导出的声明类型
    const typeDeclarations = exportedDeclarations.get("MyType");
    expect(typeDeclarations).toBeDefined();
    if (typeDeclarations) {
      expect(typeDeclarations[0].getKindName()).toContain("Type");
    }

    // 检查接口导出的声明类型
    const interfaceDeclarations = exportedDeclarations.get("MyInterface");
    expect(interfaceDeclarations).toBeDefined();
    if (interfaceDeclarations) {
      expect(interfaceDeclarations[0].getKindName()).toContain("Interface");
    }

    // 检查类导出的声明类型
    const classDeclarations = exportedDeclarations.get("MyClass");
    expect(classDeclarations).toBeDefined();
    if (classDeclarations) {
      expect(classDeclarations[0].getKindName()).toContain("Class");
    }

    // 检查函数导出的声明类型
    const functionDeclarations = exportedDeclarations.get("myFunction");
    expect(functionDeclarations).toBeDefined();
    if (functionDeclarations) {
      expect(functionDeclarations[0].getKindName()).toContain("Function");
    }

    // 检查默认导出
    const defaultDeclarations = exportedDeclarations.get("default");
    expect(defaultDeclarations).toBeDefined();
    if (defaultDeclarations) {
      expect(defaultDeclarations[0].getKindName()).toContain("Function");
    }

    // 清理临时文件
    try {
      fs.unlinkSync(filePath);
      fs.rmdirSync(path.dirname(filePath));
    }
    catch (error) {
      console.error("清理临时文件失败:", error);
    }
  });
});
