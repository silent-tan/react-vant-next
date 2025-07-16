import type { StorybookConfig } from "@storybook/react-vite";

import { dirname, join, resolve } from "node:path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

function getCampaignStoriesPaths(): string[] {
  // 从当前目录计算 Campaign 组件的路径
  const campaignPath = resolve(__dirname, "../src/");

  const paths = [
    `${campaignPath}/**/stories/**/*.mdx`,
    `${campaignPath}/**/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
  ];

  console.log("paths: ", paths);

  return paths;
}
const config: StorybookConfig = {
  stories: [
    // "../src/**/*.mdx",
    // "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ...getCampaignStoriesPaths(),
  ],
  addons: [
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  viteFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@react-vant-next/campaign": resolve(__dirname, "../src/index.ts"),
        },
      },
    };
  },
};
export default config;
