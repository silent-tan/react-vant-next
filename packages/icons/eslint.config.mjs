import antfu from "@antfu/eslint-config"

export default antfu({
  ignores: ["./es", "./lib", "./dist"],
  react: true,
  typescript: true,
  stylistic: {
    quotes: "double",
    indent: 2,
  },
}, {
  files: ["**/*.{tsx,ts}"],
  rules: {
  },
})
