/** @see https://github.com/import-js/eslint-plugin-import#module-systems */
module.exports = {
  rules: {
    // Report potentially ambiguous parse goal (`script` vs. `module`)
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
    'import/unambiguous': 'off',

    // Report CommonJS `require` calls and `module.exports` or `exports.*`.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
    'import/no-commonjs': 'off',

    // Report AMD `require` and `define` calls.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
    'import/no-amd': 'error',

    // No Node.js builtin modules.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'off',

    // Forbid imports with CommonJS exports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
    'import/no-import-module-exports': 'off',
  },
};
