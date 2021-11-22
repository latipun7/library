/** @see https://github.com/import-js/eslint-plugin-import#static-analysis */
module.exports = {
  rules: {
    // Ensure imports point to a file/module that can be resolved.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    // Ensure named imports correspond to a named export in the remote file.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
    'import/named': 'error',

    // Ensure a default export is present, given a default import.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
    'import/default': 'off',

    // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
    'import/namespace': 'off',

    // Restrict which files can be imported in a given folder
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': 'off',

    // Forbid import of modules using absolute paths
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // Forbid `require()` calls with expressions
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',

    // Prevent importing the submodules of other modules
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
    'import/no-internal-modules': 'off',

    // Forbid webpack loader syntax in imports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',

    // Forbid a module from importing itself
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // Forbid a module from importing a module with a dependency path back to itself
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    'import/no-cycle': ['error', { maxDepth: '∞' }],

    // Prevent unnecessary path segments in import and require statements
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // Forbid importing modules from parent directories
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
    'import/no-relative-parent-imports': 'off',

    // Prevent importing packages through relative paths
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
    'import/no-relative-packages': 'error',
  },
};
