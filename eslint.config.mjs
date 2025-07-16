import antfu from "@antfu/eslint-config"

export default antfu({
  ignores: [
    ".windsurf/",
    "apps/**",
    "packages/icons/**",
  ],
  formatters: true,
  react: true,
  rules: {
    "no-console": ["warn", { allow: ["warn", "error", "log"] }],

    // node
    "node/prefer-global/process": "warn",
  },
  stylistic: {
    quotes: "double",
    indent: 2,
  },
}, {
  files: ["**/*.{tsx,ts}"],
  rules: {

  },
})
