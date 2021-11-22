import confusingBrowserGlobals from 'confusing-browser-globals';

const globals = ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals);
const restrictedGlobals = globals.filter((item) => item !== 'self');

/** @see https://eslint.org/docs/rules/#suggestions */
module.exports = {
  rules: {
    // enforce getter and setter pairs in objects and classes
    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    // require braces around arrow function bodies
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // enforce the use of variables within the scope they are defined
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // enforce camelcase naming convention
    // https://eslint.org/docs/rules/camelcase
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': 'off',

    // enforce that class methods utilize `this`
    // https://eslint.org/docs/rules/class-methods-use-this
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
    // https://eslint.org/docs/rules/complexity
    complexity: 'off',

    // require `return` statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // enforce consistent naming when capturing the current execution context
    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': 'off',

    // enforce consistent brace style for all control statements
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'multi-line'],

    // require `default` cases in `switch` statements
    // https://eslint.org/docs/rules/default-case
    'default-case': ['error', { commentPattern: '^no default$' }],

    // enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    'default-case-last': 'error',

    // enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'error',

    // enforce dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': ['error', { allowKeywords: true }],

    // require the use of `===` and `!==`
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // require function names to match the name of the variable or property to which they are assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': 'off',

    // require or disallow named `function` expressions
    // https://eslint.org/docs/rules/func-names
    'func-names': 'warn',

    // enforce the consistent use of either `function` declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': 'off',

    // require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': 'error',

    // require `for-in` loops to include an `if` statement
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    'id-denylist': 'off',

    // enforce minimum and maximum identifier lengths
    // https://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // require identifiers to match a specified regular expression
    // https://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': 'error',

    // enforce a maximum depth that blocks can be nested
    // https://eslint.org/docs/rules/max-depth
    'max-depth': 'off',

    // enforce a maximum number of lines per file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': 'off',

    // enforce a maximum number of lines of code in a function
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': 'off',

    // enforce a maximum depth that callbacks can be nested
    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': 'off',

    // enforce a maximum number of parameters in function definitions
    // https://eslint.org/docs/rules/max-params
    'max-params': 'off',

    // enforce a maximum number of statements allowed in function blocks
    // https://eslint.org/docs/rules/max-statements
    'max-statements': 'off',

    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': 'off',

    // require constructor names to begin with a capital letter
    // https://eslint.org/docs/rules/new-cap
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
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',

    // disallow `Array` constructors
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // disallow bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // disallow the use of `arguments.caller` or `arguments.callee`
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // disallow lexical declarations in case clauses
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', { allowParens: true }],

    // disallow the use of `console`
    // https://eslint.org/docs/rules/no-console
    'no-console': 'warn',

    // disallow `continue` statements
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // disallow deleting variables
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // disallow division operators explicitly at the beginning of regular expressions
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // disallow `else` blocks after `return` statements in `if` statements
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    // disallow empty block statements
    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [
      'error',
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],

    // disallow `null` comparisons without type-checking operators
    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',

    // disallow the use of `eval()`
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // disallow extending native types
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // disallow unnecessary calls to `.bind()`
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // disallow unnecessary boolean casts
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // disallow unnecessary labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // disallow unnecessary semicolons
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',

    // disallow leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // disallow assignments to native objects or read-only global variables
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],

    // disallow shorthand type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': 'off',

    // disallow declarations in the global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // disallow the use of `eval()`-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // disallow inline comments after code
    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // disallow `this` keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // disallow the use of the `__iterator__` property
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // disallow labeled statements
    // https://eslint.org/docs/rules/no-labels
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // disallow `if` statements as the only statement in `else` blocks
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // disallow function declarations that contain unsafe references inside loop statements
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 'off',

    // disallow mixed binary operators
    // https://eslint.org/docs/rules/no-mixed-operators
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
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'error',

    // disallow multiline strings
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // disallow `new` operators outside of assignments or comparisons
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // disallow `new` operators with the `Function` object
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // disallow `Object` constructors
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // disallow `\8` and `\9` escape sequences in string literals
    // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
    'no-nonoctal-decimal-escape': 'error',

    // disallow octal literals
    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // disallow octal escape sequences in string literals
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // disallow reassigning `function` parameters
    // https://eslint.org/docs/rules/no-param-reassign
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
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',

    // disallow the use of the `__proto__` property
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // disallow variable redeclaration
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // disallow multiple spaces in regular expressions
    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // disallow specified names in exports
    // https://eslint.org/docs/rules/no-restricted-exports
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
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': restrictedGlobals,

    // disallow specified modules when loaded by `import`
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 'off',

    // disallow certain properties on certain objects
    // https://eslint.org/docs/rules/no-restricted-properties
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
    // https://eslint.org/docs/rules/no-restricted-syntax
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
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'always'],

    // disallow unnecessary `return await`
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // disallow `javascript:` urls
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // disallow comma operators
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // disallow identifiers from shadowing restricted names
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // disallow ternary operators
    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // disallow throwing literals as exceptions
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // disallow initializing variables to `undefined`
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // disallow the use of `undefined` as an identifier
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'off',

    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
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
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // disallow unnecessary calls to `.call()` and `.apply()`
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'off',

    // disallow unnecessary `catch` clauses
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // disallow unnecessary computed property keys in objects and classes
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // disallow unnecessary concatenation of literals or template literals
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // disallow unnecessary constructors
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // disallow unnecessary escape characters
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    // disallow redundant return statements
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // require `let` or `const` instead of `var`
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // disallow `void` operators
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // disallow specified warning terms in comments
    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': 'off',

    // disallow `with` statements
    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // require or disallow method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // enforce variables to be declared either together or separately in functions
    // https://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // require or disallow newlines around variable declarations
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],

    // require or disallow assignment operator shorthand where possible
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // require using arrow functions for callbacks
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // require `const` declarations for variables that are never reassigned after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    // require destructuring from arrays and/or objects
    // https://eslint.org/docs/rules/prefer-destructuring
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
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',

    // enforce using named capture group in regular expression
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'off',

    // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // disallow use of the `RegExp` constructor in favor of regular expression literals
    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    // require rest parameters instead of `arguments`
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // require spread operators instead of `.apply()`
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // require template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props
    'quote-props': [
      'error',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false },
    ],

    // enforce the consistent use of the radix argument when using `parseInt()`
    // https://eslint.org/docs/rules/radix
    radix: 'error',

    // disallow async functions which have no `await` expression
    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // enforce the use of `u` flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',

    // require generator functions to contain `yield`
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // enforce sorted import declarations within modules
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': 'off',

    // require object keys to be sorted
    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': 'off',

    // require variables within the same declaration block to be sorted
    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',

    // enforce consistent spacing after the `//` or `/*` in a comment
    // https://eslint.org/docs/rules/spaced-comment
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
    // https://eslint.org/docs/rules/strict
    strict: ['error', 'safe'], // this rule will be ['error', 'never'] if the type is ESModule

    // require symbol descriptions
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // require `var` declarations be placed at the top of their containing scope
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',

    // require or disallow "Yoda" conditions
    // https://eslint.org/docs/rules/yoda
    yoda: 'error',
  },
};
