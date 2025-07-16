import process from "node:process";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import copy from "rollup-plugin-copy";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const externals = [
  "react",
  "react-dom",
  "@react-spring/web",
  "@use-gesture/react",
  "@vant/popperjs",
  "clsx",
  "rc-field-form",
  "react-is",
  "react-transition-group",
  "tslib",
  "@react-vant-next/icons",
  "@react-vant-next/utils",
  "@react-vant-next/hooks",
];

export default defineConfig([
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
      // 排除 peer dependencies
      peerDepsExternal(),
      // 环境变量替换
      replace({
        preventAssignment: true,
        values: {
          "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
          "__DEV__": process.env.NODE_ENV !== "production",
        },
      }),
      // 解析 node_modules 中的包
      resolve({ extensions }),
      // 转换 CommonJS 模块
      commonjs(),
      // TypeScript 编译（包括 JSX）
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      // 样式处理
      postcss({
        extract: "index.css",
        modules: false,
        autoModules: true,
        minimize: false,
        extensions: [".css", ".less", ".scss"],
        use: {
          less: { javascriptEnabled: true, modifyVars: {} },
        },
      }),
      // 复制静态资源
      copy({
        targets: [
          { src: "src/styles", dest: "dist" },
        ],
        verbose: true,
      }),
    ],
    external: externals,
    watch: {
      clearScreen: false,
    },
  },
  // 类型定义文件打包配置
  {
    input: "src/index.ts",
    output: [
      { file: "dist/index.d.ts", format: "esm" },
    ],
    plugins: [dts()],
    external: [
      /\.(css|less|scss)$/,
      ...externals,
    ],
    watch: {
      clearScreen: false,
    },
  },
]);
