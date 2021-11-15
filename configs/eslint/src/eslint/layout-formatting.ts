/** @see https://eslint.org/docs/rules/#layout-formatting */
module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': 'off',

    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': 'error',

    // enforce line breaks after each array element
    'array-element-newline': 'off',

    // require parentheses around arrow function arguments
    'arrow-parens': 'error',

    // enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': 'error',

    // disallow or enforce spaces inside of blocks after opening block and before closing block
    'block-spacing': 'error',

    // enforce consistent brace style for blocks
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // require or disallow trailing commas
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],

    // enforce consistent spacing before and after commas
    'comma-spacing': ['error', { before: false, after: true }],

    // enforce consistent comma style
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],

    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ['error', 'never'],

    // enforce consistent newlines before and after dots
    'dot-location': ['error', 'property'],

    // require or disallow newline at the end of files
    'eol-last': ['error', 'always'],

    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],

    // enforce line breaks between arguments of a function call
    'function-call-argument-newline': ['error', 'consistent'],

    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': ['error', 'multiline-arguments'],

    // enforce consistent spacing around `*` operators in generator functions
    'generator-star-spacing': ['error', { before: false, after: true }],

    // enforce the location of arrow function bodies
    'implicit-arrow-linebreak': ['error', 'beside'],

    // enforce consistent indentation
    indent: [
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

    // enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': 'off',

    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // enforce consistent spacing before and after keywords
    'keyword-spacing': [
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

    // enforce position of line comments
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],

    // enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],

    // require empty lines around comments
    'lines-around-comment': 'off',

    // require or disallow an empty line between class members
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    // enforce a maximum line length
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': 'off',

    // enforce newlines between operands of ternary expressions
    'multiline-ternary': 'off',

    // enforce or disallow parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // require a newline after each call in a method chain
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // disallow unnecessary parentheses
    'no-extra-parens': 'off',

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // disallow multiple spaces
    'no-multi-spaces': 'error',

    // disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    // disallow all tabs
    'no-tabs': 'error',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // enforce consistent line breaks after opening and before closing braces
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],

    // enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],

    // enforce placing object properties on separate lines
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // enforce consistent linebreak style for operators
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // require or disallow padding within blocks
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],

    // require or disallow padding lines between statements
    'padding-line-between-statements': 'off',

    // enforce the consistent use of either backticks, double, or single quotes
    quotes: ['error', 'single', { avoidEscape: true }],

    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': ['error', 'never'],

    // require or disallow semicolons instead of ASI
    semi: ['error', 'always'],

    // enforce consistent spacing before and after semicolons
    'semi-spacing': ['error', { before: false, after: true }],

    // enforce location of semicolons
    'semi-style': ['error', 'last'],

    // enforce consistent spacing before blocks
    'space-before-blocks': 'error',

    // enforce consistent spacing before `function` definition opening parenthesis
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // enforce consistent spacing inside parentheses
    'space-in-parens': ['error', 'never'],

    // require spacing around infix operators
    'space-infix-ops': 'error',

    // enforce consistent spacing before or after unary operators
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': 'error',

    // require or disallow spacing between template tags and their literals
    'template-tag-spacing': ['error', 'never'],

    // require or disallow Unicode byte order mark (BOM)
    'unicode-bom': ['error', 'never'],

    // require parentheses around immediate `function` invocations
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // require parenthesis around regex literals
    'wrap-regex': 'off',

    // require or disallow spacing around the `*` in `yield*` expressions
    'yield-star-spacing': ['error', 'after'],
  },
};
