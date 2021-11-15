/** @see https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules */
module.exports = {
  rules: {
    // Enforce boolean attributes notation in JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],

    // Ensures inline tags are not rendered without spaces between them
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
    'react/jsx-child-element-spacing': 'off',

    // Validate closing bracket location in JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': 'off',

    // Validate closing tag location for multiline JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    'react/jsx-closing-tag-location': 'off',

    // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],

    // Enforce consistent line breaks inside jsx curly (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'react/jsx-curly-newline': 'off',

    // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': 'off',

    // Disallow or enforce spaces around equal signs in JSX attributes (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-equals-spacing': 'off',

    // Restrict file extensions that may contain JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // Ensure proper position of the first property in JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': 'off',

    // Enforce shorthand or standard form for React fragments (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['error', 'syntax'],

    // Enforce event handler naming conventions in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': 'off',

    // Validate JSX indentation (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': 'off',

    // Validate props indentation in JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': 'off',

    // Report missing key props in iterators/collection literals
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'error',

    // Validate JSX maximum depth
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
    'react/jsx-max-depth': 'off',

    // Limit maximum of props on a single line in JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': 'off',

    // Require or prevent a new line after jsx elements and expressions.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
    'react/jsx-newline': 'off',

    // Prevents usage of Function.prototype.bind and arrow functions in React component props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': 'off',

    // Comments inside children section of tag should be placed inside braces
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'error',

    // Prevents JSX context provider values from taking values that will cause needless rerenders.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    'react/jsx-no-constructed-context-values': 'error',

    // Enforce no duplicate props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': 'error',

    // Prevent using string literals in React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    'react/jsx-no-literals': 'off',

    // Forbid javascript: URLs
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
    'react/jsx-no-script-url': [
      'error',
      [
        {
          name: 'Link',
          props: ['to'],
        },
      ],
    ],

    // Forbid target="_blank" attribute without rel="noreferrer"
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': 'error',

    // Disallow undeclared variables in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',

    // Disallow unnecessary fragments (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': 'error',

    // Limit to one expression per line in JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': 'off',

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    // Disallow multiple spaces between inline JSX props (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-props-no-multi-spaces': 'off',

    // Prevent JSX prop spreading
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': [
      'off',
      {
        html: 'enforce',
        custom: 'ignore',
        explicitSpread: 'ignore',
        exceptions: [],
      },
    ],

    // Enforce default props alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
    'react/jsx-sort-default-props': 'off',

    // Enforce props alphabetical sorting (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': 'off',

    // Validate whitespace in and around the JSX opening and closing brackets (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': 'off',

    // Prevent React to be marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': 'error',

    // Prevent variables used in JSX to be marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',

    // Prevent missing parentheses around multilines JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': 'off',
  },
};
