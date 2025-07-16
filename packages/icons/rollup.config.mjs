import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import { defineConfig } from "rollup"
import { dts } from "rollup-plugin-dts"
import peerDepsExternal from "rollup-plugin-peer-deps-external"

const extensions = [".js", ".jsx", ".ts", ".tsx"]

const plugins = [
  // 排除 peer dependencies
  peerDepsExternal(),
  nodeResolve({ extensions }),
  commonjs(),
  typescript({
    tsconfig: "./tsconfig.json",
  }),
]

export default defineConfig([
  // ESM/CJS 构建
  {
    input: "src/icons/index.ts",
    output: [
      {
        format: "esm",
        dir: "es",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
      },
      {
        format: "cjs",
        dir: "lib",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
      },
    ],
    plugins,
    watch: {
      clearScreen: false,
    },
  },
  // 类型声明文件
  {
    input: "src/icons/index.ts",
    output: [
      { format: "es", file: "dist/index.d.ts" },
    ],
    plugins: [dts({
      tsconfig: "./tsconfig.json",
    })],
    watch: {
      clearScreen: false,
    },
  },
])
