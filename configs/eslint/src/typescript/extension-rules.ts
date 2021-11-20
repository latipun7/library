/** @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules */
module.exports = {
  rules: {
    // Enforce consistent brace style for blocks
    // https://typescript-eslint.io/rules/brace-style
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],

    // Require or disallow trailing comma
    // https://typescript-eslint.io/rules/comma-dangle
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
      },
    ],

    // Enforces consistent spacing before and after commas
    // https://typescript-eslint.io/rules/comma-spacing
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': [
      'error',
      { before: false, after: true },
    ],

    // Enforce default parameters to be last
    // https://typescript-eslint.io/rules/default-param-last
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    // enforce dot notation whenever possible
    // https://typescript-eslint.io/rules/dot-notation
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

    // Require or disallow spacing between function identifiers and their invocations
    // https://typescript-eslint.io/rules/func-call-spacing
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    // Enforce consistent indentation
    // https://typescript-eslint.io/rules/indent
    indent: 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/master/def/jsx.ts
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],

    // require or disallow initialization in variable declarations
    // https://typescript-eslint.io/rules/init-declarations
    '@typescript-eslint/init-declarations': 'off',

    // Enforce consistent spacing before and after keywords
    // https://typescript-eslint.io/rules/keyword-spacing
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],

    // Require or disallow an empty line between class members
    // https://typescript-eslint.io/rules/lines-between-class-members
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
        exceptAfterOverload: true,
      },
    ],

    // Disallow generic Array constructors
    // https://typescript-eslint.io/rules/no-array-constructor
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow duplicate class members
    // https://typescript-eslint.io/rules/no-dupe-class-members
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    // Disallow duplicate imports
    // https://typescript-eslint.io/rules/no-duplicate-imports
    '@typescript-eslint/no-duplicate-imports': 'off',

    // Disallow empty functions
    // https://typescript-eslint.io/rules/no-empty-function
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],

    // Disallow unnecessary parentheses
    // https://typescript-eslint.io/rules/no-extra-parens
    '@typescript-eslint/no-extra-parens': 'off',

    // Disallow unnecessary semicolons
    // https://typescript-eslint.io/rules/no-extra-semi
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',

    // Disallow the use of eval()-like methods
    // https://typescript-eslint.io/rules/no-implied-eval
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    // Disallow this keywords outside of classes or class-like objects
    // https://typescript-eslint.io/rules/no-invalid-this
    '@typescript-eslint/no-invalid-this': 'off',

    // Disallow function declarations that contain unsafe references inside loop statements
    // https://typescript-eslint.io/rules/no-loop-func
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    // Disallow literal numbers that lose precision
    // https://typescript-eslint.io/rules/no-loss-of-precision
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',

    // Disallow magic numbers
    // https://typescript-eslint.io/rules/no-magic-numbers
    '@typescript-eslint/no-magic-numbers': 'off',

    // Disallow variable redeclaration
    // https://typescript-eslint.io/rules/no-redeclare
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    // Disallow specified modules when loaded by import
    // https://typescript-eslint.io/rules/no-restricted-imports
    '@typescript-eslint/no-restricted-imports': 'off',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://typescript-eslint.io/rules/no-shadow
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // Disallow throwing literals as exceptions
    // https://typescript-eslint.io/rules/no-throw-literal
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',

    // Disallow unused expressions
    // https://typescript-eslint.io/rules/no-unused-expressions
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // Disallow unused variables
    // https://typescript-eslint.io/rules/no-unused-vars
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
    // https://typescript-eslint.io/rules/no-use-before-define
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
        enums: true,
        typedefs: true,
        ignoreTypeReferences: false,
      },
    ],

    // Disallow unnecessary constructors
    // https://typescript-eslint.io/rules/no-useless-constructor
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // Enforce consistent spacing inside braces
    // https://typescript-eslint.io/rules/object-curly-spacing
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    // require or disallow padding lines between statements
    // https://typescript-eslint.io/rules/padding-line-between-statements
    '@typescript-eslint/padding-line-between-statements': 'off',

    // Enforce the consistent use of either backticks, double, or single quotes
    // https://typescript-eslint.io/rules/quotes
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

    // Disallow async functions which have no await expression
    // https://typescript-eslint.io/rules/require-await
    '@typescript-eslint/require-await': 'off',

    // Enforces consistent returning of awaited values
    // https://typescript-eslint.io/rules/return-await
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',

    // Require or disallow semicolons instead of ASI
    // https://typescript-eslint.io/rules/semi
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],

    // Enforces consistent spacing before function parenthesis
    // https://typescript-eslint.io/rules/space-before-function-paren
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // This rule is aimed at ensuring there are spaces around infix operators.
    // https://typescript-eslint.io/rules/space-infix-ops
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
  },
};
