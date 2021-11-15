module.exports = {
  extends: [
    './non-rules-config',
    'plugin:@typescript-eslint/eslint-recommended',
    './supported-rules',
    './extension-rules',
  ],
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        // supported-rules
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',

        // extension-rules
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
  ],
};
