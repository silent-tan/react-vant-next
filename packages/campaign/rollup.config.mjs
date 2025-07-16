import process from "node:process";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const env = process.env.NODE_ENV || "development";

const externals = [
  "react",
  "react-dom",
  "@react-spring/web",
  "@use-gesture/react",
  "clsx",
  "react-transition-group",
  "tslib",
  "@react-vant-next/hooks",
  "@react-vant-next/icons",
  "@react-vant-next/ui",
  "@react-vant-next/utils",
];

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
          "process.env.NODE_ENV": JSON.stringify(env),
          "__DEV__": env !== "production",
        },
      }),
      resolve({
        extensions,
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        extract: "index.css",
        modules: false,
        autoModules: true,
        minimize: env === "production",
        extensions: [".css", ".less", ".scss"],
        use: {
          less: { javascriptEnabled: true },
        },
      }),
    ].filter(Boolean),
    external: (id) => {
      // 检查是否是 peer dependency
      if (id.startsWith("@react-vant-next/"))
        return true;

      // 其他固定的 external 依赖
      return externals.includes(id);
    },
    watch: {
      clearScreen: false,
    },
  },
  // 类型定义文件打包配置
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/, ...externals],
    watch: {
      clearScreen: false,
    },
  },
];
