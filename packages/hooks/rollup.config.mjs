import process from "node:process";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default [
  // JS/TS 打包配置
  {
    input: "src/index.ts",
    output: [
      {
        format: "cjs",
        sourcemap: true,
        dir: "lib",
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
      },
      {
        format: "esm",
        sourcemap: true,
        dir: "es",
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
      },
    ],
    plugins: [
      peerDepsExternal(),
      replace({
        preventAssignment: true,
        values: {
          "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
          "__DEV__": process.env.NODE_ENV !== "production",
        },
      }),
      resolve({ extensions }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
    ],
    watch: {
      clearScreen: false,
    },
  },
  // 类型定义文件打包配置
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "dist" }],
    plugins: [dts()],
    watch: {
      clearScreen: false,
    },
  },
];
