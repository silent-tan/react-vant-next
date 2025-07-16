import fs from "node:fs";
import path from "node:path";

import { Project } from "ts-morph";
/**
 * 自动导出插件核心功能测试
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { generateExportStatements, hasIgnoreExportMark, writeExportFile } from "../core.mjs";

// 模拟 fs 模块
vi.mock("fs");

// 设置模拟函数
beforeEach(() => {
  vi.mocked(fs.existsSync).mockReset();
  vi.mocked(fs.readFileSync).mockReset();
  vi.mocked(fs.writeFileSync).mockReset();
});

// 模拟 console
const originalConsole = { ...console };
beforeEach(() => {
  console.log = vi.fn();
  console.warn = vi.fn();
  console.error = vi.fn();
});

afterEach(() => {
  console.log = originalConsole.log;
  console.warn = originalConsole.warn;
  console.error = originalConsole.error;
  vi.resetAllMocks();
});

describe("hasIgnoreExportMark", () => {
  it("应该返回 false 当节点为空", () => {
    expect(hasIgnoreExportMark([], null as any)).toBe(false);
  });

  it("应该检测直接相关的 @ignore-export 注释", async () => {
    // 创建一个临时项目和源文件
    const project = new Project({ compilerOptions: {
      sourceRoot: "./",
    }, useInMemoryFileSystem: true, fileSystem: void 0 });
    const sourceFile = project.createSourceFile(
      "file.ts",
      `
// @ignore-export
export const testVar = 123;

export const normalVar = 456;
      `,
    );

    // 获取导出声明
    const exportedDeclarations = sourceFile.getExportedDeclarations();
    const testVarDeclarations = exportedDeclarations.get("testVar");
    const normalVarDeclarations = exportedDeclarations.get("normalVar");

    // 获取源文件的行
    const sourceLines = sourceFile.getFullText().split(/\r?\n/);

    // 测试带有 @ignore-export 标记的导出
    if (testVarDeclarations && testVarDeclarations.length > 0) {
      expect(hasIgnoreExportMark(sourceLines, testVarDeclarations[0], "@ignore-export")).toBe(true);
    }

    // 测试正常导出
    if (normalVarDeclarations && normalVarDeclarations.length > 0) {
      expect(hasIgnoreExportMark(sourceLines, normalVarDeclarations[0], "@ignore-export")).toBe(false);
    }
  });

  it("处理 fixtures mitt.txt", async () => {
    const project = new Project({ useInMemoryFileSystem: true });
    const content = await fs.promises.readFile(path.join(__dirname, "./fixtures/mitt.txt"), "utf-8");
    const sourceFile = project.createSourceFile(
      "file.ts",
      content,
    );
    const sourceLines = sourceFile.getFullText().split(/\r?\n/);

    const exportedDeclarations = sourceFile.getExportedDeclarations();
    const defaultDeclarations = exportedDeclarations.get("default");
    if (defaultDeclarations && defaultDeclarations.length > 0) {
      expect(hasIgnoreExportMark(sourceLines, defaultDeclarations[0], "@ignore-export")).toBe(false);
    }
  });

  it("应该检测 JSDoc 中的 @ignore-export 注释", () => {
    // 创建一个临时项目和源文件
    const project = new Project({ useInMemoryFileSystem: true });
    const sourceFile = project.createSourceFile(
      "file.ts",
      `
/** @ignore-export*/
export const testVar = 123;

export const normalVar = 456;
      `,
    );

    // 获取导出声明
    const exportedDeclarations = sourceFile.getExportedDeclarations();
    const testVarDeclarations = exportedDeclarations.get("testVar");
    const normalVarDeclarations = exportedDeclarations.get("normalVar");

    // 获取源文件的行
    const sourceLines = sourceFile.getFullText().split(/\r?\n/);

    // 测试带有 @ignore-export 标记的导出
    if (testVarDeclarations && testVarDeclarations.length > 0) {
      expect(hasIgnoreExportMark(sourceLines, testVarDeclarations[0])).toBe(true);
    }

    // 测试正常导出
    if (normalVarDeclarations && normalVarDeclarations.length > 0) {
      expect(hasIgnoreExportMark(sourceLines, normalVarDeclarations[0])).toBe(false);
    }
  });

  it("应该正确处理多个导出和注释", () => {
    // 创建一个临时项目和源文件
    const project = new Project({ useInMemoryFileSystem: true });
    const sourceFile = project.createSourceFile(
      "file.ts",
      `
export const var1 = 1;

// @ignore-export
export const var2 = 2;

export const var3 = 3;

/* @ignore-export */
export const var4 = 4;
      `,
    );

    // 获取导出声明
    const exportedDeclarations = sourceFile.getExportedDeclarations();

    // 获取源文件的行
    const sourceLines = sourceFile.getFullText().split(/\r?\n/);

    // 测试各个导出
    const var1Declarations = exportedDeclarations.get("var1");
    const var2Declarations = exportedDeclarations.get("var2");
    const var3Declarations = exportedDeclarations.get("var3");
    const var4Declarations = exportedDeclarations.get("var4");

    if (var1Declarations && var1Declarations.length > 0) {
      expect(hasIgnoreExportMark(sourceLines, var1Declarations[0])).toBe(false);
    }

    if (var2Declarations && var2Declarations.length > 0) {
      expect(hasIgnoreExportMark(sourceLines, var2Declarations[0])).toBe(true);
    }

    if (var3Declarations && var3Declarations.length > 0) {
      expect(hasIgnoreExportMark(sourceLines, var3Declarations[0])).toBe(false);
    }

    if (var4Declarations && var4Declarations.length > 0) {
      expect(hasIgnoreExportMark(sourceLines, var4Declarations[0])).toBe(true);
    }
  });
});

describe("generateExportStatements", () => {
  it("应该生成正确的导出语句", () => {
    const exportsByDir = {
      dir1: [
        { name: "func1", path: "./dir1/file1" },
        { name: "func2", path: "./dir1/file2" },
      ],
      dir2: [
        { name: "func3", path: "./dir2/file3" },
      ],
    };

    const { content, totalExports, groupCount } = generateExportStatements(exportsByDir);

    expect(totalExports).toBe(3);
    expect(groupCount).toBe(2);
    expect(content).toContain("// dir1");
    expect(content).toContain("// dir2");
    expect(content).toContain("export { func1 } from \"./dir1/file1\";");
    expect(content).toContain("export { func2 } from \"./dir1/file2\";");
    expect(content).toContain("export { func3 } from \"./dir2/file3\";");
  });

  it("应该按目录和名称排序", () => {
    const exportsByDir = {
      dirB: [
        { name: "funcB", path: "./dirB/fileB" },
        { name: "funcA", path: "./dirB/fileA" },
      ],
      dirA: [
        { name: "funcC", path: "./dirA/fileC" },
      ],
    };

    const { content } = generateExportStatements(exportsByDir);

    // 检查目录排序
    const dirAIndex = content.indexOf("// dirA");
    const dirBIndex = content.indexOf("// dirB");
    expect(dirAIndex).toBeLessThan(dirBIndex);

    // 检查名称排序
    const funcAIndex = content.indexOf("export { funcA }");
    const funcBIndex = content.indexOf("export { funcB }");
    expect(funcAIndex).toBeLessThan(funcBIndex);
  });
});

describe("writeExportFile", () => {
  it("应该写入文件当内容不同时", () => {
    // 模拟文件存在但内容不同
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue("old content");

    const result = writeExportFile("test.ts", "new content");

    expect(result).toBe(true);
    expect(fs.writeFileSync).toHaveBeenCalledWith("test.ts", "new content", "utf-8");
  });

  it("应该跳过写入当内容相同时", () => {
    // 模拟文件存在且内容相同
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue("same content");

    const result = writeExportFile("test.ts", "same content");

    expect(result).toBe(false);
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });

  it("应该写入文件当文件不存在时", () => {
    // 模拟文件不存在
    vi.mocked(fs.existsSync).mockReturnValue(false);

    const result = writeExportFile("test.ts", "new content");

    expect(result).toBe(true);
    expect(fs.writeFileSync).toHaveBeenCalledWith("test.ts", "new content", "utf-8");
  });

  it("应该处理写入错误", () => {
    // 模拟文件不存在
    vi.mocked(fs.existsSync).mockReturnValue(false);
    // 模拟写入错误
    vi.mocked(fs.writeFileSync).mockImplementation(() => {
      throw new Error("写入错误");
    });

    const result = writeExportFile("test.ts", "new content");

    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalled();
  });
});
