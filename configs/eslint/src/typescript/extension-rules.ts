/** @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules */
module.exports = {
  rules: {
    // Enforce consistent brace style for blocks
    '@typescript-eslint/brace-style': 'off',

    // Require or disallow trailing comma
    '@typescript-eslint/comma-dangle': 'off',

    // Enforces consistent spacing before and after commas
    '@typescript-eslint/comma-spacing': 'off',

    // Enforce default parameters to be last
    '@typescript-eslint/default-param-last': 'off',

    // enforce dot notation whenever possible
    '@typescript-eslint/dot-notation': 'off',

    // Require or disallow spacing between function identifiers and their invocations
    '@typescript-eslint/func-call-spacing': 'off',

    // Enforce consistent indentation
    '@typescript-eslint/indent': 'off',

    // require or disallow initialization in variable declarations
    '@typescript-eslint/init-declarations': 'off',

    // Enforce consistent spacing before and after keywords
    '@typescript-eslint/keyword-spacing': 'off',

    // Require or disallow an empty line between class members
    '@typescript-eslint/lines-between-class-members': 'off',

    // Disallow generic Array constructors
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow duplicate class members
    '@typescript-eslint/no-dupe-class-members': 'off',

    // Disallow duplicate imports
    '@typescript-eslint/no-duplicate-imports': 'off',

    // Disallow empty functions
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],

    // Disallow unnecessary parentheses
    '@typescript-eslint/no-extra-parens': 'off',

    // Disallow unnecessary semicolons
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',

    // Disallow the use of eval()-like methods
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    // Disallow this keywords outside of classes or class-like objects
    '@typescript-eslint/no-invalid-this': 'off',

    // Disallow function declarations that contain unsafe references inside loop statements
    '@typescript-eslint/no-loop-func': 'off',

    // Disallow literal numbers that lose precision
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',

    // Disallow magic numbers
    '@typescript-eslint/no-magic-numbers': 'off',

    // Disallow variable redeclaration
    '@typescript-eslint/no-redeclare': 'off',

    // Disallow specified modules when loaded by import
    '@typescript-eslint/no-restricted-imports': 'off',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    '@typescript-eslint/no-shadow': 'off',

    // Disallow throwing literals as exceptions
    '@typescript-eslint/no-throw-literal': 'off',

    // Disallow unused expressions
    '@typescript-eslint/no-unused-expressions': 'off',

    // Disallow unused variables
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],

    // Disallow the use of variables before they are defined
    '@typescript-eslint/no-use-before-define': 'off',

    // Disallow unnecessary constructors
    '@typescript-eslint/no-useless-constructor': 'off',

    // Enforce consistent spacing inside braces
    '@typescript-eslint/object-curly-spacing': 'off',

    // require or disallow padding lines between statements
    '@typescript-eslint/padding-line-between-statements': 'off',

    // Enforce the consistent use of either backticks, double, or single quotes
    '@typescript-eslint/quotes': 'off',

    // Disallow async functions which have no await expression
    '@typescript-eslint/require-await': 'off',

    // Enforces consistent returning of awaited values
    '@typescript-eslint/return-await': 'off',

    // Require or disallow semicolons instead of ASI
    '@typescript-eslint/semi': 'off',

    // Enforces consistent spacing before function parenthesis
    '@typescript-eslint/space-before-function-paren': 'off',

    // This rule is aimed at ensuring there are spaces around infix operators.
    '@typescript-eslint/space-infix-ops': 'off',
  },
};
