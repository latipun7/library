/** @see https://eslint.org/docs/rules/#possible-problems */
module.exports = {
  rules: {
    // enforce `return` statements in callbacks of array methods
    'array-callback-return': ['error', { allowImplicit: true }],

    // require `super()` calls in constructors
    'constructor-super': 'error',

    // enforce "for" loop update clause moving the counter in the right direction
    'for-direction': 'error',

    // enforce `return` statements in getters
    'getter-return': ['error', { allowImplicit: true }],

    // disallow using an async function as a Promise executor
    'no-async-promise-executor': 'error',

    // disallow `await` inside of loops
    'no-await-in-loop': 'error',

    // disallow reassigning class members
    'no-class-assign': 'error',

    // disallow comparing against -0
    'no-compare-neg-zero': 'error',

    // disallow assignment operators in conditional expressions
    'no-cond-assign': ['error', 'always'],

    // disallow reassigning `const` variables
    'no-const-assign': 'error',

    // disallow constant expressions in conditions
    'no-constant-condition': 'warn',

    // disallow returning value from constructor
    'no-constructor-return': 'error',

    // disallow control characters in regular expressions
    'no-control-regex': 'error',

    // disallow the use of `debugger`
    'no-debugger': 'error',

    // disallow duplicate arguments in `function` definitions
    'no-dupe-args': 'error',

    // disallow duplicate class members
    'no-dupe-class-members': 'error',

    // disallow duplicate conditions in if-else-if chains
    'no-dupe-else-if': 'error',

    // disallow duplicate keys in object literals
    'no-dupe-keys': 'error',

    // disallow duplicate case labels
    'no-duplicate-case': 'error',

    // disallow duplicate module imports
    'no-duplicate-imports': 'off',

    // disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // disallow empty destructuring patterns
    'no-empty-pattern': 'error',

    // disallow reassigning exceptions in `catch` clauses
    'no-ex-assign': 'error',

    // disallow fallthrough of `case` statements
    'no-fallthrough': 'error',

    // disallow reassigning `function` declarations
    'no-func-assign': 'error',

    // disallow assigning to imported bindings
    'no-import-assign': 'error',

    // disallow variable or `function` declarations in nested blocks
    'no-inner-declarations': 'error',

    // disallow invalid regular expression strings in `RegExp` constructors
    'no-invalid-regexp': 'error',

    // disallow irregular whitespace
    'no-irregular-whitespace': 'error',

    // disallow literal numbers that lose precision
    'no-loss-of-precision': 'error',

    // disallow characters which are made with multiple code points in character class syntax
    'no-misleading-character-class': 'error',

    // disallow `new` operators with the `Symbol` object
    'no-new-symbol': 'error',

    // disallow calling global object properties as functions
    'no-obj-calls': 'error',

    // disallow returning values from Promise executor functions
    'no-promise-executor-return': 'error',

    // disallow calling some `Object.prototype` methods directly on objects
    'no-prototype-builtins': 'error',

    // disallow assignments where both sides are exactly the same
    'no-self-assign': 'error',

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // disallow returning values from setters
    'no-setter-return': 'error',

    // disallow sparse arrays
    'no-sparse-arrays': 'error',

    // disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',

    // disallow `this`/`super` before calling `super()` in constructors
    'no-this-before-super': 'error',

    // disallow the use of undeclared variables unless mentioned in `/*global */` comments
    'no-undef': 'error',

    // disallow confusing multiline expressions
    'no-unexpected-multiline': 'error',

    // disallow unmodified loop conditions
    'no-unmodified-loop-condition': 'off',

    // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    'no-unreachable': 'error',

    // disallow loops with a body that allows only one iteration
    'no-unreachable-loop': 'error',

    // disallow control flow statements in `finally` blocks
    'no-unsafe-finally': 'error',

    // disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',

    // disallow use of optional chaining in contexts where the `undefined` value is not allowed
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],

    // disallow unused private class members
    'no-unused-private-class-members': 'warn',

    // disallow unused variables
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],

    // disallow the use of variables before they are defined
    'no-use-before-define': 'error',

    // disallow useless backreferences in regular expressions
    'no-useless-backreference': 'error',

    // disallow assignments that can lead to race conditions due to usage of `await` or `yield`
    'require-atomic-updates': 'off',

    // require calls to `isNaN()` when checking for `NaN`
    'use-isnan': 'error',

    // enforce comparing `typeof` expressions against valid strings
    'valid-typeof': 'error',
  },
};
