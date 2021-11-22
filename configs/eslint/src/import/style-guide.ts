/** @see https://github.com/import-js/eslint-plugin-import#style-guide */
module.exports = {
  rules: {
    // Ensure all imports appear before other statements
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
    'import/first': 'error',

    // Ensure all exports appear after other statements
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
    'import/exports-last': 'off',

    // Report repeated import of the same module in multiple places
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // Forbid namespace (a.k.a. "wildcard" *) imports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
    'import/no-namespace': 'off',

    // Ensure consistent use of file extension within the import path
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
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
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    'import/order': [
      'error',
      { groups: [['builtin', 'external', 'internal']] },
    ],

    // Enforce a newline after import statements
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // Prefer a default export if module exports a single name
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'error',

    // Limit the maximum number of dependencies a module can have
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
    'import/max-dependencies': 'off',

    // Forbid unassigned imports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': 'off',

    // Forbid named default exports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // Forbid default exports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
    'import/no-default-export': 'off',

    // Forbid named exports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
    'import/no-named-export': 'off',

    // Forbid anonymous values as default exports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'off',

    // Prefer named exports to be grouped together in a single export declaration
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
    'import/group-exports': 'off',

    // Enforce a leading comment with the webpackChunkName for dynamic imports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
    'import/dynamic-import-chunkname': 'off',
  },
};
