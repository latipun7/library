/** @see https://github.com/import-js/eslint-plugin-import#static-analysis */
module.exports = {
  rules: {
    // Ensure imports point to a file/module that can be resolved.
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    // Ensure named imports correspond to a named export in the remote file.
    'import/named': 'error',

    // Ensure a default export is present, given a default import.
    'import/default': 'off',

    // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
    'import/namespace': 'off',

    // Restrict which files can be imported in a given folder
    'import/no-restricted-paths': 'off',

    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'error',

    // Forbid `require()` calls with expressions
    'import/no-dynamic-require': 'error',

    // Prevent importing the submodules of other modules
    'import/no-internal-modules': 'off',

    // Forbid webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'error',

    // Forbid a module from importing itself
    'import/no-self-import': 'error',

    // Forbid a module from importing a module with a dependency path back to itself
    'import/no-cycle': ['error', { maxDepth: '∞' }],

    // Prevent unnecessary path segments in import and require statements
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // Forbid importing modules from parent directories
    'import/no-relative-parent-imports': 'off',

    // Prevent importing packages through relative paths
    'import/no-relative-packages': 'error',
  },
};
