import { parse } from "@typescript-eslint/typescript-estree";
import { describe, it } from "vitest";

describe("test parse", () => {
  it("should parse", () => {
    const code = "// @ignore\nexport const b = 1;";
    const ast = parse(code);
    console.log(ast);
  });
});
