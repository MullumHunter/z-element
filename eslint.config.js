import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    files: ["src/js/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
        { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
        { "blankLine": "always", "prev": "*", "next": "return" }
      ],
      "no-multiple-empty-lines": ["error"],
      'semi': ['error', 'always'],
      'no-param-reassign': 'off',
      'no-void': 'off',
      'no-nested-ternary': 'off',
      'max-classes-per-file': 'off',
      'linebreak-style': 0,
      'no-plusplus': 'off',
      'max-len': ['error', {
        code: 255,
        ignoreComments: true,
      }],
      'no-use-before-define': 'off',
      'no-underscore-dangle': 'off',
      'no-shadow': 0,
      'new-cap': ['error', { newIsCap: false }],
      'quotes': ['warn', 'single', { avoidEscape: true }],
      'no-unused-vars': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
]);
