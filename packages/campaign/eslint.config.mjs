import antfu from "@antfu/eslint-config";
import storybook from "eslint-plugin-storybook";
import globals from "globals";

export default antfu({
  react: true,
  typescript: true,
  stylistic: {
    quotes: "double",
    indent: 2,
    semi: true,
  },
  ignores: [
    "**/node_modules/**",
    "**/dist/**",
    "**/*.md",
  ],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error", "log"] }],

    // node
    "node/prefer-global/process": "warn",
  },
}, {
  files: ["**/*.{tsx,ts}"],
  languageOptions: {
    globals: globals.browser,
  },
  rules: {
    "react/no-clone-element": "off",
    "react/no-children-to-array": "off",
    "node/prefer-global/process": "off",
    "react-hooks-extra/no-direct-set-state-in-use-effect": "off",
  },
}, {
  files: ["**/demo/*.{ts,tsx,js,jsx,mjs,cjs}"],
  rules: {
    "react-refresh/only-export-components": "off",
  },
}, ...storybook.configs["flat/recommended"], {
  files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
  rules: {
    // example of overriding a rule
    "storybook/hierarchy-separator": "error",
    // example of disabling a rule
    "storybook/default-exports": "off",
    "react-hooks/rules-of-hooks": "off",
  },
});
