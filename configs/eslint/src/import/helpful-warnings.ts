/** @see https://github.com/import-js/eslint-plugin-import#helpful-warnings */
module.exports = {
  rules: {
    // Report any invalid exports, i.e. re-export of the same name
    'import/export': 'error',

    // Report use of exported name as identifier of default export
    'import/no-named-as-default': 'error',

    // Report use of exported name as property of default export
    'import/no-named-as-default-member': 'error',

    // Report imported names marked with `@deprecated` documentation tag
    'import/no-deprecated': 'off',

    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '{config,configs}/**/*',
          'test.{js,cjs,mjs,jsx,ts,tsx}',
          'test-*.{js,cjs,mjs,jsx,ts,tsx}',
          '**/.*rc.{js,cjs,mjs,ts}',
          '**/*rc.{js,cjs,mjs,ts}',
          '**/*.conf.{js,cjs,mjs,ts}',
          '**/*.conf.*.{js,cjs,mjs,ts}',
          '**/*.{config,configs}.{js,cjs,mjs,ts}',
          '**/*.{config,configs}.*.{js,cjs,mjs,ts}',
          '**/*{.,_}{test,spec}.{js,cjs,mjs,jsx,ts,tsx}',
          '**/{mock,mocks}/**/*',
          '**/{spec,specs}/**/*',
          '**/{test,tests}/**/*',
          '**/__{mock,mocks}__/**/*',
          '**/__{test,tests}__/**/*',
          '**/gulpfile.{js,cjs,mjs,ts}',
          '**/gulpfile.*.{js,cjs,mjs,ts}',
          '**/Gruntfile{,.js,cjs,mjs,ts}',
        ],
        optionalDependencies: false,
      },
    ],

    // Forbid the use of mutable exports with `var` or `let`.
    'import/no-mutable-exports': 'error',

    // Report modules without exports, or exports without matching import in another module
    'import/no-unused-modules': 'off',
  },
};
