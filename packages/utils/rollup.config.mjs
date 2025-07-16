import process from "node:process";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import { dts } from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const mode = process.env.NODE_ENV || "development";

const plugins = [
  peerDepsExternal(),
  replace({
    preventAssignment: true,
    values: {
      "process.env.NODE_ENV": JSON.stringify(mode),
      "__DEV__": mode !== "production",
    },
  }),
  nodeResolve({ extensions }),
  commonjs(),
  typescript({
    tsconfig: "./tsconfig.json",
  }),
].filter(Boolean);

/**
 * dts 构建
 * @param {string[]} inputs
 * @returns
 */
const dtsBuilder = (inputs) => {
  return inputs.map((path) => {
    return {
      input: path,
      output: {
        dir: "dist",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
      plugins: [dts({
        tsconfig: "./tsconfig.json",
      })],
      watch: {
        clearScreen: false,
      },
    }
  })
}

export default defineConfig([
  // ESM/cjs 构建
  {
    input: [
      "src/index.ts",
      "src/create/index.ts",
      "src/dev/index.ts",
      "src/dom/index.ts",
      "src/event-emitter/index.ts",
      "src/format/index.ts",
      "src/lodash-like/index.ts",
      "src/react-util/index.ts",
      "src/validate/index.ts",
    ],
    output: [
      {
        format: "esm",
        dir: "es",
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
        sourcemap: true,
      },
      {
        format: "cjs",
        dir: "lib",
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins,
  },
  // 类型定义文件打包配置
  ...dtsBuilder([
    "src/create/index.ts",
    "src/dev/index.ts",
    "src/dom/index.ts",
    "src/event-emitter/index.ts",
    "src/format/index.ts",
    "src/lodash-like/index.ts",
    "src/react-util/index.ts",
    "src/validate/index.ts",
    "src/index.ts",
  ]),
]);
