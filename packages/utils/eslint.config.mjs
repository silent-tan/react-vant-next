import antfu from "@antfu/eslint-config";
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
    "**/src/re-export.ts",
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
    "perfectionist/sort-imports": [
      "error",
      {
        type: "alphabetical",
        order: "asc",
        ignoreCase: true,
        specialCharacters: "keep",
        internalPattern: ["^@/.+"],
        partitionByComment: false,
        partitionByNewLine: false,
        newlinesBetween: "always",
        maxLineLength: undefined,
        groups: [
          "builtin",
          "type",
          "external",
          "internal-type",
          "internal",
          ["parent-type", "sibling-type", "index-type"],
          ["parent", "sibling", "index"],
          "object",
          "unknown",
        ],
      },
    ],
  },
});
