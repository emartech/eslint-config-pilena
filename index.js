const eslintConfig = {
  extends: [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/strict-mode',
    './rules/variables',
    './rules/node-js-and-common-js',
    './rules/stylistic-issues',
    './rules/ecma-script-6',
  ].map(path => require.resolve(path)),
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {},
};

module.exports = eslintConfig;
