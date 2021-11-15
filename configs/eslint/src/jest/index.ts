module.exports = {
  extends: ['./non-rules-config', './jest-rules'],
  rules: {
    // NOTE: Workaround until `eslint-find-rules` supports 'overrides'
    // See https://github.com/sarbbottam/eslint-find-rules/issues/317
    'jest/unbound-method': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/**/*.ts?(x)',
        '**/*.{spec,test}.ts?(x)',
        '**/{jest,test,tests}.{setup,utils,helper}.ts?(x)',
      ],
      rules: {
        // https://github.com/jest-community/eslint-plugin-jest#typescript-rules
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],
};
