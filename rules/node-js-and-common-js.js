// Node.js and CommonJS
// https://eslint.org/docs/rules/#node-js-and-commonjs

const nodeJsAndCommonJs = {
  rules: {
    // Require `return` statements after callbacks
    // https://eslint.org/docs/rules/callback-return
    'callback-return': 'off',

    // Require `require()` calls to be placed at top-level module scope
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // Require error handling in callbacks
    // https://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': 'off',

    // Disallow use of the `Buffer()` constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // Disallow `require` calls to be mixed with regular variable declarations
    // https://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': 'off',

    // Disallow `new` operators with calls to `require`
    // https://eslint.org/docs/rules/no-new-require
    'no-new-require': 'error',

    // Disallow string concatenation with `__dirname` and `__filename`
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // Disallow the use of `process.env`
    // https://eslint.org/docs/rules/no-process-env
    'no-process-env': 'off',

    // Disallow the use of `process.exit()`
    // https://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 'off',

    // Disallow specified modules when loaded by `require`
    // https://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': 'off',

    // Disallow synchronous methods
    // https://eslint.org/docs/rules/no-sync
    'no-sync': 'warn',
  },
};

module.exports = nodeJsAndCommonJs;
