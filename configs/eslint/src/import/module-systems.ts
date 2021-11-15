/** @see https://github.com/import-js/eslint-plugin-import#module-systems */
module.exports = {
  rules: {
    // Report potentially ambiguous parse goal (`script` vs. `module`)
    'import/unambiguous': 'off',

    // Report CommonJS `require` calls and `module.exports` or `exports.*`.
    'import/no-commonjs': 'off',

    // Report AMD `require` and `define` calls.
    'import/no-amd': 'error',

    // No Node.js builtin modules.
    'import/no-nodejs-modules': 'off',

    // Forbid imports with CommonJS exports
    'import/no-import-module-exports': 'off',
  },
};
