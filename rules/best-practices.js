// Best Practices
// https://eslint.org/docs/rules/#best-practices

const bestPractices = {
  rules: {
    // Enforce getter and setter pairs in objects and classes
    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    // Enforce `return` statements in callbacks of array methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // Enforce the use of variables within the scope they are defined
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // Enforce that class methods utilize `this`
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'off',

    // Enforce a maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/rules/complexity
    complexity: ['warn', { max: 10 }],

    // Require `return` statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'warn',

    // Enforce consistent brace style for all control statements
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'multi-line'],

    // Require `default` cases in `switch` statements
    // https://eslint.org/docs/rules/default-case
    'default-case': 'warn',

    // Enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    // https://eslint.org/docs/7.0.0/rules/default-case-last
    // TODO: The rule has not released yet
    // 'default-case-last': 'error',

    // Enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': ['error'],

    // Enforce consistent newlines before and after dots
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // Enforce dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': 'error',

    // Require the use of `===` and `!==`
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // Require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': 'error',

    // Require `for-in` loops to include an `if` statement
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'warn',

    // Enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': 'error',

    // Disallow the use of `alert`, `confirm`, and `prompt`
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',

    // Disallow the use of `arguments.caller` or `arguments.callee`
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // Disallow lexical declarations in case clauses
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // Disallow returning value from constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'error',

    // Disallow division operators explicitly at the beginning of regular expressions
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // Disallow `else` blocks after `return` statements in `if` statements
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['warn', { allowElseIf: false }],

    // Disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [
      'error',
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],

    // Disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // Disallow `null` comparisons without type-checking operators
    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',

    // Disallow the use of `eval()`
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // Disallow extending native types
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // Disallow unnecessary calls to `.bind()`
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // Disallow unnecessary labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // Disallow fallthrough of `case` statements
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // Disallow leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // Disallow assignments to native objects or read-only global variables
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': 'error',

    // Disallow shorthand type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': 'error',

    // Disallow declarations in the global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'error',

    // Disallow the use of `eval()`-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // Disallow `this` keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'warn',

    // Disallow the use of the `__iterator__` property
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // Disallow labeled statements
    // https://eslint.org/docs/rules/no-labels
    'no-labels': 'error',

    // Disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // Disallow function declarations that contain unsafe references inside loop statements
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // Disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 'off',

    // Disallow multiple spaces
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // Disallow multiline strings
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // Disallow `new` operators outside of assignments or comparisons
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // Disallow `new` operators with the `Function` object
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // Disallow octal literals
    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // Disallow octal escape sequences in string literals
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // Disallow reassigning `function` parameters
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'error',

    // disallow the use of the `__proto__` property
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // Disallow variable redeclaration
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // Disallow certain properties on certain objects
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      { object: 'describe', property: 'only' },
      { object: 'it', property: 'only' },
    ],

    // Disallow assignment operators in `return` statements
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'always'],

    // Disallow unnecessary `return await`
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // Disallow `javascript:` urls
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // Disallow assignments where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',

    // Disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // Disallow comma operators
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // Disallow throwing literals as exceptions
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // Disallow unmodified loop conditions
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',

    // Disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': 'error',

    // Disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // Disallow unnecessary calls to `.call()` and `.apply()`
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'error',

    // Disallow unnecessary `catch` clauses
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // Disallow unnecessary concatenation of literals or template literals
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // Disallow unnecessary escape characters
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // Disallow redundant return statements
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // Disallow `void` operators
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // Disallow specified warning terms in comments
    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': 'warn',

    // Disallow `with` statements
    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // Enforce using named capture group in regular expression
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'warn',

    // Require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // Disallow use of the `RegExp` constructor in favor of regular expression literals
    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': 'off',

    // Enforce the consistent use of the radix argument when using `parseInt()`
    // https://eslint.org/docs/rules/radix
    radix: 'error',

    // Disallow async functions which have no `await` expression
    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // Enforce the use of `u` flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',

    // Require `var` declarations be placed at the top of their containing scope
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',

    // Require parentheses around immediate `function` invocations
    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': 'error',

    // Require or disallow "Yoda" conditions
    // https://eslint.org/docs/rules/yoda
    yoda: 'error',
  },
};

module.exports = bestPractices;
