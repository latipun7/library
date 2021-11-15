/** @see https://github.com/jest-community/eslint-plugin-jest#rules */
module.exports = {
  rules: {
    // Have control over test and it usages
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
    'jest/consistent-test-it': 'error',

    // Enforce assertion to be made in a test body
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: [
          'expect',
          'expect.**',
          'request.**.expect',
          'assert',
          'assert.**',
          '**.assert*',
        ],
      },
    ],

    // Enforces a maximum depth to nested describe calls
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
    'jest/max-nested-describe': 'error',

    // Disallow alias methods
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
    'jest/no-alias-methods': 'warn',

    // Disallow commented out tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md
    'jest/no-commented-out-tests': 'warn',

    // Prevent calling expect conditionally
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
    'jest/no-conditional-expect': 'error',

    // Disallow use of deprecated functions
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-deprecated-functions.md
    'jest/no-deprecated-functions': 'error',

    // Disallow disabled tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
    'jest/no-disabled-tests': 'warn',

    // Avoid using a callback in asynchronous tests and hooks
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
    'jest/no-done-callback': 'error',

    // Disallow duplicate setup and teardown hooks
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
    'jest/no-duplicate-hooks': 'error',

    // Disallow using exports in files containing tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-export.md
    'jest/no-export': 'error',

    // Disallow focused tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
    'jest/no-focused-tests': 'error',

    // Disallow setup and teardown hooks
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-hooks.md
    'jest/no-hooks': 'off',

    // Disallow identical titles
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
    'jest/no-identical-title': 'error',

    // Disallow conditional logic
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-if.md
    'jest/no-if': 'error',

    // Disallow string interpolation inside snapshots
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-interpolation-in-snapshots.md
    'jest/no-interpolation-in-snapshots': 'error',

    // Disallow Jasmine globals
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jasmine-globals.md
    'jest/no-jasmine-globals': 'error',

    // Disallow importing Jest
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jest-import.md
    'jest/no-jest-import': 'error',

    // disallow large snapshots
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],

    // Disallow manually importing from __mocks__
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-mocks-import.md
    'jest/no-mocks-import': 'error',

    // Disallow specific matchers & modifiers
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
    'jest/no-restricted-matchers': 'off',

    // Disallow using expect outside of it or test blocks
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
    'jest/no-standalone-expect': 'error',

    // Use .only and .skip over f and x
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-prefixes.md
    'jest/no-test-prefixes': 'error',

    // Disallow explicitly returning from tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
    'jest/no-test-return-statement': 'off',

    // Suggest using toBeCalledWith() or toHaveBeenCalledWith()
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
    'jest/prefer-called-with': 'error',

    // Suggest using expect.assertions() OR expect.hasAssertions()
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-assertions.md
    'jest/prefer-expect-assertions': 'off',

    // Prefer await expect(...).resolves over expect(await ...) syntax
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
    'jest/prefer-expect-resolves': 'off',

    // Suggest having hooks before any test cases
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
    'jest/prefer-hooks-on-top': 'error',

    // Enforce lowercase test names
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
    'jest/prefer-lowercase-title': 'off',

    // Suggest using jest.spyOn()
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
    'jest/prefer-spy-on': 'off',

    // Suggest using toStrictEqual()
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
    'jest/prefer-strict-equal': 'off',

    // Suggest using toBe() for primitive literals
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
    'jest/prefer-to-be': 'error',

    // Suggest using toContain()
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
    'jest/prefer-to-contain': 'error',

    // Suggest using toHaveLength()
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': 'error',

    // Suggest using test.todo
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
    'jest/prefer-todo': 'error',

    // Require setup and teardown code to be within a hook
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
    'jest/require-hook': 'off',

    // Require a message for toThrow()
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-to-throw-message.md
    'jest/require-to-throw-message': 'off',

    // Require test cases and hooks to be inside a describe block
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
    'jest/require-top-level-describe': 'off',

    // Enforce valid describe() callback
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
    'jest/valid-describe-callback': 'error',

    // Enforce valid expect() usage
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
    'jest/valid-expect': 'error',

    // Ensure promises that have expectations in their chain are valid
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md
    'jest/valid-expect-in-promise': 'error',

    // Enforce valid titles
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
    'jest/valid-title': 'error',
  },
};
