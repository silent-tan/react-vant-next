## 使用

```
autoExport({
  srcDir: "src",
  reExportFile: "src/re-export.ts",
  indexFile: "src/index.ts",
  ignoreExportMark: "@ignore-export",
}),
```

## 原始思路

```mjs
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { Node, Project, ts } from "ts-morph";

/**
 * Rollup 插件：自动导出
 * 在构建过程中自动生成 re-export.ts 文件，包含所有导出语句
 *
 * @param {object} options - 插件配置选项
 * @param {string} options.srcDir - 源码目录路径
 * @param {string} options.reExportFile - 自动生成的导出文件路径
 * @param {string} options.indexFile - 主入口文件路径（用于排除循环导入）
 * @param {string} options.ignoreExportMark - 忽略导出标记
 * @returns {object} Rollup 插件对象
 */
export default function autoExport(options = {}) {
  const {
    srcDir = "src",
    reExportFile = "src/re-export.ts",
    indexFile = "src/index.ts",
    ignoreExportMark = "@ignore-export",
  } = options;

  // 源码目录的绝对路径
  const srcDirPath = path.resolve(process.cwd(), srcDir);
  // re-export.ts 文件的绝对路径
  const reExportFilePath = path.resolve(process.cwd(), reExportFile);
  // index.ts 文件的绝对路径（用于排除循环导入）
  const indexFilePath = path.resolve(process.cwd(), indexFile);

  // 存储所有需要导出的内容 (名称 -> 相对路径)
  const exports = new Map();

  // 初始化 ts-morph 项目
  let project;

  /**
   * 判断是否为类型声明（type、interface、enum）
   * @param {Node} node - ts-morph 节点
   * @returns {boolean} - 是否为类型声明
   */
  function isTypeDeclaration(node) {
    return (
      Node.isTypeAliasDeclaration(node)
      || Node.isInterfaceDeclaration(node)
      || Node.isEnumDeclaration(node)
    );
  }

  /**
   * 检查节点是否有 @ignore-export 标记
   * @param {Node} node - ts-morph 节点
   * @returns {boolean} - 是否有忽略标记
   */
  function hasIgnoreExportMark(node) {
    // 不同类型的节点获取注释的方法可能不同
    if (!node)
      return false;

    try {
      // 获取节点的名称
      let nodeName = "";
      if (typeof node.getName === "function") {
        nodeName = node.getName();
      }
      else if (typeof node.getText === "function") {
        // 尝试从文本中提取名称
        const text = node.getText();
        const match = text.match(/export\s+(const|let|var|function|class)\s+(\w+)/);
        if (match && match[2]) {
          nodeName = match[2];
        }
      }

      // 检查节点的源文件
      const sourceFile = node.getSourceFile();
      if (!sourceFile)
        return false;

      // 获取节点的位置
      const pos = node.getPos();

      // 获取节点前的文本，限制在合理范围内
      const fullText = sourceFile.getFullText();
      const startPos = Math.max(0, pos - 500); // 往前查找最多 500 个字符
      const textBeforeNode = fullText.substring(startPos, pos);

      // 分析节点前的文本，寻找最后几行
      const lines = textBeforeNode.split("\n");

      // 只检查节点前的最后 5 行，类似于 @ts-ignore 的工作方式
      const relevantLines = lines.slice(Math.max(0, lines.length - 5));

      // 检查这几行中是否有 @ignore-export 标记
      // 如果有，则需要确保该标记与当前节点直接相关
      for (let i = relevantLines.length - 1; i >= 0; i--) {
        const line = relevantLines[i];
        if (line.includes(ignoreExportMark)) {
          // 检查该行之后是否有其他导出语句
          let hasOtherExportBetween = false;
          for (let j = i + 1; j < relevantLines.length; j++) {
            if (relevantLines[j].includes("export ") && !relevantLines[j].includes(nodeName)) {
              hasOtherExportBetween = true;
              break;
            }
          }

          // 如果注释和当前节点之间没有其他导出语句，则认为该注释属于当前节点
          if (!hasOtherExportBetween) {
            console.log(`[auto-export] 已识别到直接相关的 @ignore-export 标记: ${nodeName || "未命名节点"}`);
            return true;
          }
        }
      }

      // 检查标准 JSDoc 注释
      let jsDocText = "";
      try {
        if (typeof node.getJsDocs === "function") {
          const jsDocs = node.getJsDocs();
          if (jsDocs && jsDocs.length > 0) {
            jsDocText = jsDocs.map(doc => doc.getText()).join("\n");
            if (jsDocText.includes(ignoreExportMark)) {
              console.log(`[auto-export] 已识别到带有 @ignore-export 标记的 JSDoc: ${nodeName || "未命名节点"}`);
              return true;
            }
          }
        }
      }
      catch (error) {
        console.warn(`[auto-export] 检查 JSDoc 时出错: ${error.message}`);
      }

      // 检查前置注释
      try {
        if (typeof node.getLeadingCommentRanges === "function") {
          const commentRanges = node.getLeadingCommentRanges();
          if (commentRanges && commentRanges.length > 0) {
            const commentText = commentRanges.map(range => range.getText()).join("\n");
            if (commentText.includes(ignoreExportMark)) {
              console.log(`[auto-export] 已识别到带有 @ignore-export 标记的前置注释: ${nodeName || "未命名节点"}`);
              return true;
            }
          }
        }
      }
      catch (error) {
        console.warn(`[auto-export] 检查前置注释时出错: ${error.message}`);
      }

      // 检查注释文本中是否包含忽略标记
      return jsDocText.includes(ignoreExportMark);
    }
    catch (error) {
      console.log(`警告: 解析节点注释时出错: ${error.message}`);
      return false;
    }
  }

  /**
   * 分析源文件中的导出
   */
  function analyzeExports() {
    // 清空之前的导出
    exports.clear();

    const sourceFiles = project.getSourceFiles();

    for (const sourceFile of sourceFiles) {
      const filePath = sourceFile.getFilePath();

      // 跳过 index.ts
      if (filePath === indexFilePath)
        continue;

      // 查找所有导出声明
      const exportedDeclarations = sourceFile.getExportedDeclarations();

      // 处理每个导出声明
      exportedDeclarations.forEach((declarations, name) => {
        for (const declaration of declarations) {
          // 跳过类型声明
          if (isTypeDeclaration(declaration))
            continue;

          // 检查是否有忽略标记
          if (hasIgnoreExportMark(declaration))
            continue;

          // 计算相对路径
          const relativePath = path.relative(srcDirPath, filePath).replace(/\.(ts|tsx)$/, "");
          const importPath = `./${relativePath}`;

          // 添加到导出列表
          exports.set(name, importPath);
        }
      });
    }
  }

  /**
   * 生成 re-export.ts 文件
   */
  function generateReExportFile() {
    // 检查当前 re-export.ts 文件内容（如果存在）
    let currentContent = "";
    if (fs.existsSync(reExportFilePath)) {
      currentContent = fs.readFileSync(reExportFilePath, "utf-8");
    }

    // 添加文件头部注释
    const headerComment = `/**
 * 此文件由 Rollup 自动导出插件生成
 * 请不要手动修改，因为所有更改都会在下次构建时被覆盖
 * 生成时间：${new Date().toLocaleString()}
 */

`;

    // 按目录分组导出语句
    const exportsByDirectory = new Map();

    exports.forEach((modulePath, name) => {
      // 提取目录路径
      const directoryPath = modulePath.split("/").slice(0, -1).join("/");

      if (!exportsByDirectory.has(directoryPath)) {
        exportsByDirectory.set(directoryPath, []);
      }

      exportsByDirectory.get(directoryPath).push(`export { ${name} } from "${modulePath}";`);
    });

    // 生成导出语句，按目录分组
    const groupedExports = [];

    // 将目录路径排序
    const sortedDirectories = [...exportsByDirectory.keys()].sort();

    for (const directory of sortedDirectories) {
      // 获取当前目录下的导出语句并按字母排序
      const dirExports = exportsByDirectory.get(directory).sort();

      // 添加目录注释
      if (directory) {
        groupedExports.push(`// ${directory}`);
      }

      // 添加该目录下的所有导出
      groupedExports.push(...dirExports);

      // 在不同目录之间添加空行
      groupedExports.push("");
    }

    // 如果最后有空行，删除它
    if (groupedExports.length > 0 && groupedExports[groupedExports.length - 1] === "") {
      groupedExports.pop();
    }

    // 生成新的文件内容
    const newContent = headerComment + groupedExports.join("\n");

    // 比较新旧内容，如果相同则不更新文件
    if (currentContent === newContent) {
      console.log(`[auto-export] ${reExportFile} 导出内容未变化，无需更新`);
      return;
    }

    // 写入文件
    fs.writeFileSync(reExportFilePath, newContent, "utf-8");

    // 计算导出项目总数
    const totalExports = [...exportsByDirectory.values()].reduce((sum, arr) => sum + arr.length, 0);

    console.log(`[auto-export] 成功生成 ${reExportFile}，共导出 ${totalExports} 个项目，分组为 ${sortedDirectories.length} 个目录`);
  }

  return {
    name: "auto-export",

    buildStart() {
      console.log("[auto-export] 开始分析导出项...");

      // 初始化 ts-morph 项目
      project = new Project({
        compilerOptions: {
          target: ts.ScriptTarget.ESNext,
          module: ts.ModuleKind.ESNext,
        },
      });

      // 添加所有 TypeScript 文件到项目
      project.addSourceFilesAtPaths([
        `${srcDirPath}/**/*.ts`,
        `${srcDirPath}/**/*.tsx`,
        `!${srcDirPath}/**/*.d.ts`, // 排除声明文件
      ]);

      // 分析导出并生成 re-export.ts
      analyzeExports();
      generateReExportFile();

      console.log("[auto-export] 导出处理完成！");
    },
  };
}
```
