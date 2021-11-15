module.exports = {
  env: { node: true, es6: true, es2017: true, es2020: true, es2021: true },
  overrides: [
    {
      files: ['**/*.mjs'],
      parserOptions: { sourceType: 'module' },
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true,
        project: ['**/tsconfig.json'],
      },
    },
    {
      files: ['**/*.{jsx,tsx}'],
      env: { browser: true },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  ],
};
