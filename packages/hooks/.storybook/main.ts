import type { StorybookConfig } from "@storybook/react-vite";

import { dirname, join, resolve } from "node:path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

function getHookStoriesPaths(): string[] {
  // 从当前目录计算 Campaign 组件的路径
  const hookPath = resolve(__dirname, "../src");

  return [
    `${hookPath}/**/stories/**/*.mdx`,
    `${hookPath}/**/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
  ];
}
const config: StorybookConfig = {
  stories: [
    // "../src/**/*.mdx",
    // "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ...getHookStoriesPaths(),
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
          "@react-vant-next/hooks": resolve(__dirname, "../src/index.ts"),
        },
      },
    };
  },
};
export default config;
