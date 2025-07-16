/**
 * Rollup 自动导出插件
 * 自动收集并生成导出语句
 */
import path from "node:path";
import process from "node:process";
import { collectExports, generateExportStatements, writeExportFile } from "./core.mjs";

/**
 * @typedef {import('rollup').Plugin} Plugin
 */

/**
 * @typedef {object} AutoExportOptions
 * @property {string} [srcDir='src'] - 源代码目录
 * @property {string} [outputFile='src/re-export.ts'] - 输出文件
 * @property {string[]} [excludeDirs=[]] - 排除的目录
 * @property {string[]} [excludeFiles=[]] - 排除的文件
 * @property {boolean} [verbose=false] - 是否启用详细日志
 * @property {boolean} [devOnly=true] - 是否仅在开发环境下运行
 */

/**
 * 创建自动导出插件
 * @param {AutoExportOptions} options - 插件选项
 * @returns {Plugin} Rollup 插件
 */
export default function autoExport(options = {}) {
  const {
    srcDir = "src",
    outputFile = "src/re-export.ts",
    excludeDirs = [],
    excludeFiles = [],
    verbose = false,
    devOnly = true,
  } = options;

  return {
    name: "auto-export",

    buildStart: {
      handler() {
        // 如果仅在开发环境下运行，则检查环境变量
        if (devOnly && process.env.NODE_ENV === "production") {
          return;
        }

        console.log("[auto-export] 开始分析导出项...");

        try {
          // 收集导出项
          const exportsByDir = collectExports(srcDir, { excludeDirs, excludeFiles, verbose });

          // 生成导出语句
          const { content, totalExports, groupCount } = generateExportStatements(exportsByDir);

          // 写入文件
          const absoluteOutputPath = path.resolve(outputFile);
          const isWritten = writeExportFile(absoluteOutputPath, content);

          if (isWritten) {
            console.log(`[auto-export] 成功生成 ${outputFile}，共导出 ${totalExports} 个项目，分组为 ${groupCount} 个目录`);
          }
          else {
            console.log(`[auto-export] ${outputFile} 内容未变，跳过写入`);
          }

          console.log("[auto-export] 导出处理完成！");
        }
        catch (error) {
          console.error(error);
          console.error(`[auto-export] 处理导出时出错: ${error.message}`);
        }
      },
      once: true,
    },
  };
}
