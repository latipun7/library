/** @see https://github.com/import-js/eslint-plugin-import#style-guide */
module.exports = {
  rules: {
    // Ensure all imports appear before other statements
    'import/first': 'error',

    // Ensure all exports appear after other statements
    'import/exports-last': 'off',

    // Report repeated import of the same module in multiple places
    'import/no-duplicates': 'error',

    // Forbid namespace (a.k.a. "wildcard" *) imports
    'import/no-namespace': 'off',

    // Ensure consistent use of file extension within the import path
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Enforce a convention in module import order
    'import/order': [
      'error',
      { groups: [['builtin', 'external', 'internal']] },
    ],

    // Enforce a newline after import statements
    'import/newline-after-import': 'error',

    // Prefer a default export if module exports a single name
    'import/prefer-default-export': 'error',

    // Limit the maximum number of dependencies a module can have
    'import/max-dependencies': 'off',

    // Forbid unassigned imports
    'import/no-unassigned-import': 'off',

    // Forbid named default exports
    'import/no-named-default': 'error',

    // Forbid default exports
    'import/no-default-export': 'off',

    // Forbid named exports
    'import/no-named-export': 'off',

    // Forbid anonymous values as default exports
    'import/no-anonymous-default-export': 'off',

    // Prefer named exports to be grouped together in a single export declaration
    'import/group-exports': 'off',

    // Enforce a leading comment with the webpackChunkName for dynamic imports
    'import/dynamic-import-chunkname': 'off',
  },
};
