module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    'max-len': 'off', // disables line length check
    'indent': 'off',
    "eol-last": 0,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "semi": [2, "always"],
    "quotes": [2, "single", { "avoidEscape": true }],
    "object-curly-spacing": [2, "always"],
  },
};
