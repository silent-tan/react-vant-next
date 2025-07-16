import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { getAbsolutePath, getUiStoriesPaths } from "./util";

describe("storybook Custom Util", () => {
  it("getUiStoriesPaths", () => {
    const __dirname = fileURLToPath(import.meta.url);
    expect(getUiStoriesPaths()).toEqual([
      `${join(__dirname, "../../../../packages/ui/src/components")}/**/stories/**/*.mdx`,
      `${join(__dirname, "../../../../packages/ui/src/components")}/**/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
    ]);
  });

  it("getAbsolutePath", () => {
    const __dirname = fileURLToPath(import.meta.url);
    expect(getAbsolutePath("@react-vant-next/ui")).toBe(join(__dirname, "../../../../packages/ui"));
  });
});
