module.exports = {
  extends: [
    './non-rules-config',
    './static-analysis',
    './helpful-warnings',
    './module-systems',
    './style-guide',
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        // static-analysis
        // TypeScript compilation already ensures that named imports exist in the referenced module
        'import/named': 'off',
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        // helpful-warnings
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/{entity,entities,model,models}/*', '**/*.{entity,model}.*'],
      rules: {
        // static-analysis
        'import/no-cycle': 'off',
      },
    },
  ],
};
