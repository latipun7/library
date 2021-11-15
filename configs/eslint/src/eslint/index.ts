module.exports = {
  extends: [
    './non-rules-config',
    './possible-problems',
    './suggestions',
    './layout-formatting',
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        // suggestions
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust
        'default-case': 'off',
      },
    },
  ],
};
