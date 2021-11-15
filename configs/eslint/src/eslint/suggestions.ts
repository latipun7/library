import confusingBrowserGlobals from 'confusing-browser-globals';

const globals = ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals);
const restrictedGlobals = globals.filter((item) => item !== 'self');

/** @see https://eslint.org/docs/rules/#suggestions */
module.exports = {
  rules: {
    // enforce getter and setter pairs in objects and classes
    'accessor-pairs': 'off',

    // require braces around arrow function bodies
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // enforce the use of variables within the scope they are defined
    'block-scoped-var': 'error',

    // enforce camelcase naming convention
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

    // enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',

    // enforce that class methods utilize `this`
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          // discord-akairo abstract methods
          'exec',
          'clear',
          'delete',
          'get',
          'init',
          'set',

          // react lifecycle methods
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate',
        ],
      },
    ],

    // enforce a maximum cyclomatic complexity allowed in a program
    complexity: 'off',

    // require `return` statements to either always or never specify values
    'consistent-return': 'error',

    // enforce consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // enforce consistent brace style for all control statements
    curly: ['error', 'multi-line'],

    // require `default` cases in `switch` statements
    'default-case': ['error', { commentPattern: '^no default$' }],

    // enforce default clauses in switch statements to be last
    'default-case-last': 'error',

    // enforce default parameters to be last
    'default-param-last': 'error',

    // enforce dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // require the use of `===` and `!==`
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'off',

    // require or disallow named `function` expressions
    'func-names': 'warn',

    // enforce the consistent use of either `function` declarations or expressions
    'func-style': 'off',

    // require grouped accessor pairs in object literals and classes
    'grouped-accessor-pairs': 'error',

    // require `for-in` loops to include an `if` statement
    'guard-for-in': 'error',

    // disallow specified identifiers
    'id-denylist': 'off',

    // enforce minimum and maximum identifier lengths
    'id-length': 'off',

    // require identifiers to match a specified regular expression
    'id-match': 'off',

    // require or disallow initialization in variable declarations
    'init-declarations': 'off',

    // enforce a maximum number of classes per file
    'max-classes-per-file': 'error',

    // enforce a maximum depth that blocks can be nested
    'max-depth': 'off',

    // enforce a maximum number of lines per file
    'max-lines': 'off',

    // enforce a maximum number of lines of code in a function
    'max-lines-per-function': 'off',

    // enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': 'off',

    // enforce a maximum number of parameters in function definitions
    'max-params': 'off',

    // enforce a maximum number of statements allowed in function blocks
    'max-statements': 'off',

    // enforce a particular style for multiline comments
    'multiline-comment-style': 'off',

    // require constructor names to begin with a capital letter
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
      },
    ],

    // disallow the use of `alert`, `confirm`, and `prompt`
    'no-alert': 'warn',

    // disallow `Array` constructors
    'no-array-constructor': 'error',

    // disallow bitwise operators
    'no-bitwise': 'error',

    // disallow the use of `arguments.caller` or `arguments.callee`
    'no-caller': 'error',

    // disallow lexical declarations in case clauses
    'no-case-declarations': 'error',

    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': ['error', { allowParens: true }],

    // disallow the use of `console`
    'no-console': 'warn',

    // disallow `continue` statements
    'no-continue': 'error',

    // disallow deleting variables
    'no-delete-var': 'error',

    // disallow division operators explicitly at the beginning of regular expressions
    'no-div-regex': 'off',

    // disallow `else` blocks after `return` statements in `if` statements
    'no-else-return': ['error', { allowElseIf: false }],

    // disallow empty block statements
    'no-empty': 'error',

    // disallow empty functions
    'no-empty-function': [
      'error',
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],

    // disallow `null` comparisons without type-checking operators
    'no-eq-null': 'off',

    // disallow the use of `eval()`
    'no-eval': 'error',

    // disallow extending native types
    'no-extend-native': 'error',

    // disallow unnecessary calls to `.bind()`
    'no-extra-bind': 'error',

    // disallow unnecessary boolean casts
    'no-extra-boolean-cast': 'error',

    // disallow unnecessary labels
    'no-extra-label': 'error',

    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // disallow assignments to native objects or read-only global variables
    'no-global-assign': ['error', { exceptions: [] }],

    // disallow shorthand type conversions
    'no-implicit-coercion': 'off',

    // disallow declarations in the global scope
    'no-implicit-globals': 'off',

    // disallow the use of `eval()`-like methods
    'no-implied-eval': 'error',

    // disallow inline comments after code
    'no-inline-comments': 'off',

    // disallow `this` keywords outside of classes or class-like objects
    'no-invalid-this': 'off',

    // disallow the use of the `__iterator__` property
    'no-iterator': 'error',

    // disallow labels that share a name with a variable
    'no-label-var': 'error',

    // disallow labeled statements
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // disallow `if` statements as the only statement in `else` blocks
    'no-lonely-if': 'error',

    // disallow function declarations that contain unsafe references inside loop statements
    'no-loop-func': 'error',

    // disallow magic numbers
    'no-magic-numbers': 'off',

    // disallow mixed binary operators
    'no-mixed-operators': [
      'error',
      {
        // the list of arthmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||'],
        ],
        allowSamePrecedence: false,
      },
    ],

    // disallow use of chained assignment expressions
    'no-multi-assign': 'error',

    // disallow multiline strings
    'no-multi-str': 'error',

    // disallow negated conditions
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow `new` operators outside of assignments or comparisons
    'no-new': 'error',

    // disallow `new` operators with the `Function` object
    'no-new-func': 'error',

    // disallow `Object` constructors
    'no-new-object': 'error',

    // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    'no-new-wrappers': 'error',

    // disallow `\8` and `\9` escape sequences in string literals
    'no-nonoctal-decimal-escape': 'error',

    // disallow octal literals
    'no-octal': 'error',

    // disallow octal escape sequences in string literals
    'no-octal-escape': 'error',

    // disallow reassigning `function` parameters
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'context', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'staticContext', // for ReactRouter context
        ],
      },
    ],

    // disallow the unary operators `++` and `--`
    'no-plusplus': 'error',

    // disallow the use of the `__proto__` property
    'no-proto': 'error',

    // disallow variable redeclaration
    'no-redeclare': 'error',

    // disallow multiple spaces in regular expressions
    'no-regex-spaces': 'error',

    // disallow specified names in exports
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: [
          'default', // use `export default` to provide a default export
          'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
        ],
      },
    ],

    // disallow specified global variables
    'no-restricted-globals': restrictedGlobals,

    // disallow specified modules when loaded by `import`
    'no-restricted-imports': 'off',

    // disallow certain properties on certain objects
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],

    // disallow specified syntax
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // disallow assignment operators in `return` statements
    'no-return-assign': ['error', 'always'],

    // disallow unnecessary `return await`
    'no-return-await': 'error',

    // disallow `javascript:` urls
    'no-script-url': 'error',

    // disallow comma operators
    'no-sequences': 'error',

    // disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'error',

    // disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': 'error',

    // disallow ternary operators
    'no-ternary': 'off',

    // disallow throwing literals as exceptions
    'no-throw-literal': 'error',

    // disallow initializing variables to `undefined`
    'no-undef-init': 'error',

    // disallow the use of `undefined` as an identifier
    'no-undefined': 'off',

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__precacheManifest',
          '__WB_MANIFEST',
          '__REACT_DEVTOOLS_GLOBAL_HOOK__',
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
        ],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],

    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow unused expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // disallow unused labels
    'no-unused-labels': 'error',

    // disallow unnecessary calls to `.call()` and `.apply()`
    'no-useless-call': 'off',

    // disallow unnecessary `catch` clauses
    'no-useless-catch': 'error',

    // disallow unnecessary computed property keys in objects and classes
    'no-useless-computed-key': 'error',

    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'error',

    // disallow unnecessary constructors
    'no-useless-constructor': 'error',

    // disallow unnecessary escape characters
    'no-useless-escape': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    // disallow redundant return statements
    'no-useless-return': 'error',

    // require `let` or `const` instead of `var`
    'no-var': 'error',

    // disallow `void` operators
    'no-void': 'error',

    // disallow specified warning terms in comments
    'no-warning-comments': 'off',

    // disallow `with` statements
    'no-with': 'error',

    // require or disallow method and property shorthand syntax for object literals
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // enforce variables to be declared either together or separately in functions
    'one-var': ['error', 'never'],

    // require or disallow newlines around variable declarations
    'one-var-declaration-per-line': ['error', 'always'],

    // require or disallow assignment operator shorthand where possible
    'operator-assignment': ['error', 'always'],

    // require using arrow functions for callbacks
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // require `const` declarations for variables that are never reassigned after declared
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    // require destructuring from arrays and/or objects
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // disallow the use of `Math.pow` in favor of the `**` operator
    'prefer-exponentiation-operator': 'error',

    // enforce using named capture group in regular expression
    'prefer-named-capture-group': 'off',

    // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',

    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    'prefer-object-spread': 'error',

    // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // disallow use of the `RegExp` constructor in favor of regular expression literals
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    // require rest parameters instead of `arguments`
    'prefer-rest-params': 'error',

    // require spread operators instead of `.apply()`
    'prefer-spread': 'error',

    // require template literals instead of string concatenation
    'prefer-template': 'error',

    // require quotes around object literal property names
    'quote-props': [
      'error',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false },
    ],

    // enforce the consistent use of the radix argument when using `parseInt()`
    radix: 'error',

    // disallow async functions which have no `await` expression
    'require-await': 'off',

    // enforce the use of `u` flag on RegExp
    'require-unicode-regexp': 'off',

    // require generator functions to contain `yield`
    'require-yield': 'error',

    // enforce sorted import declarations within modules
    'sort-imports': 'off',

    // require object keys to be sorted
    'sort-keys': 'off',

    // require variables within the same declaration block to be sorted
    'sort-vars': 'off',

    // enforce consistent spacing after the `//` or `/*` in a comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'],
          balanced: true,
        },
      },
    ],

    // require or disallow strict mode directives
    strict: ['error', 'safe'], // this rule will be ['error', 'never'] if the type is ESModule

    // require symbol descriptions
    'symbol-description': 'error',

    // require `var` declarations be placed at the top of their containing scope
    'vars-on-top': 'error',

    // require or disallow "Yoda" conditions
    yoda: 'error',
  },
};
