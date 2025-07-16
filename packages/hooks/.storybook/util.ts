import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
export function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

export function getCampaignStoriesPaths(): string[] {
  // 使用 import.meta.url 获取当前文件的路径
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentDirPath = dirname(currentFilePath);

  // 从当前目录计算 Campaign 组件的路径
  const campaignPath = resolve(currentDirPath, "../../../packages/campaign/src/components/");

  return [
    `${campaignPath}/**/stories/**/*.mdx`,
    `${campaignPath}/**/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
  ];
}
