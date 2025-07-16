/**
 * 自动导出插件核心功能
 */
import fs from "node:fs";
import path from "node:path";
import { Node, Project } from "ts-morph";

// 忽略导出标记
export const IGNORE_EXPORT_MARK = "@ignore-export";
export const IGNORE_EXPORT_FILE_MARK = "@ignore-export-file";

/**
 * 检查节点是否有 @ignore-export 标记
 *
 * @example
 * ```ts
 * // @ignore-export
 * export const testVar = 123;   // ✅  单行行注释
 *
 * export const testVar2 = 123;  // ❌ 没有标记
 *
 * /** @ignore-export *\/
 * export const testVar3 = 123;  // ✅  单行快注释
 *
 * /** @ignore-export *\/
 *
 * export const testVar4 = 123;  // ❌ 不是注释的下一行
 *
 * // @ignore-export
 * const b = 10; // ❌ 不是导出语句
 * ```
 *
 * 仅支持当行注释或者单行的快注释下一行是导出语句
 *
 * @param {string[]} lines - 源文件的行
 * @param {ExportedDeclarations} exportedDeclaration - ts-morph 导出声明
 * @param {string} mark - 标记
 * @returns - 是否有忽略标记
 */
export function hasIgnoreExportMark(lines, exportedDeclaration, mark = IGNORE_EXPORT_MARK) {
  if (!exportedDeclaration)
    return false;

  try {
    // 获取开始行号
    const line = exportedDeclaration.getStartLineNumber();
    const lastLine = line - 1;
    const prevLineSource = lines[lastLine - 1];

    if (!prevLineSource) {
      return false;
    }

    const prevLine = prevLineSource.trim();

    if (prevLine.startsWith("//")) {
      const text = prevLine.substring(2).trim();
      return text.includes(mark);
    }

    if (prevLine.startsWith("/*")) {
      const text = prevLine.substring(2).trim();
      return text.includes(mark);
    }

    return false;
  }
  catch (error) {
    console.warn(`[auto-export] 检查注释时出错: ${error.message}`);
  }
}

/**
 * 收集目录下所有可导出的项
 * @param {string} srcDir - 源代码目录
 * @param {object} options - 配置选项
 * @param {string[]} options.excludeDirs - 排除的目录
 * @param {string[]} options.excludeFiles - 排除的文件
 * @param {boolean} options.verbose - 是否输出详细信息
 * @returns {object} - 按目录分组的导出项
 */
export function collectExports(srcDir, options = {}) {
  const { excludeDirs = [], excludeFiles = [], verbose = false } = options;

  // 创建 ts-morph 项目
  const project = new Project({
    compilerOptions: {
      allowJs: true,
    },
  });

  // 添加源文件
  project.addSourceFilesAtPaths([
    `${srcDir}/**/*.ts`,
    `${srcDir}/**/*.tsx`,
    `!${srcDir}/**/*.d.ts`,
    `!${srcDir}/**/node_modules/**`,
  ]);

  // 按目录分组的导出项
  /**
   * @type {Record<string, Array<{ name: string; path: string }>>}
   */
  const exportsByDir = {};

  // 遍历所有源文件
  for (const sourceFile of project.getSourceFiles()) {
    const filePath = sourceFile.getFilePath();
    const relativePath = path.relative(srcDir, filePath);

    // 跳过排除的文件和目录
    if (excludeFiles.some(exclude => relativePath.includes(exclude))) {
      if (verbose)
        console.log(`[auto-export] 跳过排除的文件: ${relativePath}`);
      continue;
    }

    if (excludeDirs.some(exclude => relativePath.includes(exclude))) {
      if (verbose)
        console.log(`[auto-export] 跳过排除的目录: ${relativePath}`);
      continue;
    }

    // 跳过 index.ts 和 re-export.ts
    if (relativePath.endsWith("index.ts") || relativePath.endsWith("re-export.ts")) {
      continue;
    }

    // 获取目录名称
    const dirName = path.dirname(relativePath);

    // 获取所有导出声明
    const exportedDeclarations = sourceFile.getExportedDeclarations();
    const sourceLines = sourceFile.getFullText().split(/\r?\n/);

    // 第一行是否是 IGNORE_EXPORT_FILE_MARK
    const firstLine = sourceLines[0];
    if (firstLine.includes(IGNORE_EXPORT_FILE_MARK)) {
      if (verbose)
        console.log(`[auto-export] 跳过带有 @ignore-export-file 标记的文件: ${relativePath}`);
      continue;
    }

    // 处理导出声明
    exportedDeclarations.forEach((declarations, name) => {
      // 检查是否有忽略标记
      for (const declaration of declarations) {
        // 跳过类型声明
        // if (isTypeDeclaration(declaration)) {
        //   if (verbose)
        //     console.log(`[auto-export] 跳过类型声明: ${name}`);
        //   return;
        // }

        // 忽略 default
        if (name === "default") {
          if (verbose)
            console.log(`[auto-export] 跳过 default 导出: ${name}`);
          return;
        }

        if (hasIgnoreExportMark(sourceLines, declaration)) {
          if (verbose)
            console.log(`[auto-export] 跳过带有 @ignore-export 标记的导出: ${name}`);
          return;
        }
      }

      // 添加到导出列表
      if (!exportsByDir[dirName]) {
        exportsByDir[dirName] = [];
      }

      const importPath = `./${relativePath.replace(/\.[^/.]+$/, "")}`;
      exportsByDir[dirName].push({
        name,
        path: importPath,
      });
    });
  }

  return exportsByDir;
}

// eslint-disable-next-line jsdoc/require-returns-check
/**
 * 生成导出语句
 * @param {Record<string, Array<{ name: string; path: string }>>} exportsByDir - 按目录分组的导出项
 * @returns {object} statements - 生成的导出语句
 * @returns {string} statements.content - 生成的导出语句
 * @returns {number} statements.totalExports - 总导出项数
 * @returns {number} statements.groupCount - 分组数
 */
export function generateExportStatements(exportsByDir) {
  let content = `/**
 * 此文件由 Rollup 自动导出插件生成
 * 请不要手动修改，因为所有更改都会在下次构建时被覆盖
 */\n\n`;

  // 按目录排序
  const sortedDirs = Object.keys(exportsByDir).sort();

  // 生成导出语句
  let totalExports = 0;
  const dirCount = sortedDirs.length;

  for (let i = 0; i < dirCount; i++) {
    const dir = sortedDirs[i];
    const exports = exportsByDir[dir];
    if (exports.length === 0)
      continue;

    content += `// ${dir}\n`;

    // 按名称排序
    exports.sort((a, b) => a.name.localeCompare(b.name));

    for (const exp of exports) {
      content += `export { ${exp.name} } from "${exp.path}";\n`;
      totalExports++;
    }

    if (i < dirCount - 1)
      content += "\n";
  }

  return { content, totalExports, groupCount: dirCount };
}

/**
 * 写入导出文件
 * @param {string} filePath - 文件路径
 * @param {string} content - 文件内容
 * @returns {boolean} - 是否写入成功
 */
export function writeExportFile(filePath, content) {
  try {
    // 检查文件是否存在，以及内容是否相同
    if (fs.existsSync(filePath)) {
      const existingContent = fs.readFileSync(filePath, "utf-8");
      if (existingContent === content) {
        // 内容相同，不需要写入
        return false;
      }
    }

    // 写入文件
    fs.writeFileSync(filePath, content, "utf-8");
    return true;
  }
  catch (error) {
    console.error(`[auto-export] 写入文件失败: ${error.message}`);
    return false;
  }
}

/**
 * 判断是否为类型声明（type、interface、enum）
 * @param {Node} node - ts-morph 节点
 * @returns {boolean} - 是否为类型声明
 */
export function isTypeDeclaration(node) {
  return (
    Node.isTypeAliasDeclaration(node)
    || Node.isInterfaceDeclaration(node)
    || Node.isEnumDeclaration(node)
  );
}
