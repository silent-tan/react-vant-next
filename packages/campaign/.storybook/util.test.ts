import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { getAbsolutePath, getCampaignStoriesPaths } from "./util";

describe("storybook Custom Util", () => {
  it("getCampaignStoriesPaths", () => {
    const __dirname = fileURLToPath(import.meta.url);
    expect(getCampaignStoriesPaths()).toEqual([
      `${join(__dirname, "../../../../packages/campaign/src/components")}/**/stories/**/*.mdx`,
      `${join(__dirname, "../../../../packages/campaign/src/components")}/**/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
    ]);
  });

  it("getAbsolutePath", () => {
    const __dirname = fileURLToPath(import.meta.url);
    expect(getAbsolutePath("@react-vant-next/campaign")).toBe(join(__dirname, "../../../../packages/campaign"));
  });
});
