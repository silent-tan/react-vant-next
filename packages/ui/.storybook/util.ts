import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
export function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

export function getUiStoriesPaths(): string[] {
  // 使用 import.meta.url 获取当前文件的路径
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentDirPath = dirname(currentFilePath);

  // 从当前目录计算 UI 组件的路径
  const uiPath = resolve(currentDirPath, "../../../packages/ui/src/components/");

  return [
    `${uiPath}/**/stories/**/*.mdx`,
    `${uiPath}/**/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
  ];
}
