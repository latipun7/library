module.exports = {
  extends: [
    './non-rules-config',
    './react/supported-rules',
    './react/jsx-specific',
    './react-hooks',
    './jsx-a11y',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
};
