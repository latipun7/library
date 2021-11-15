module.exports = {
  extends: ['./non-rules-config', './supported-rules'],
  overrides: [
    {
      files: [
        '**/__tests__/**/*.[jt]sx',
        '**/*.{spec,test}.[jt]sx',
        '**/{jest,test,tests}.{setup,utils,helper}.[jt]sx',
      ],
      rules: {
        // @testing-library/react
        'testing-library/no-await-sync-events': 'error',
        'testing-library/no-container': 'error',
        'testing-library/no-debugging-utils': 'error',
        'testing-library/no-dom-import': ['error', 'react'],
        'testing-library/no-manual-cleanup': 'error',
        'testing-library/no-node-access': 'error',
        'testing-library/no-render-in-setup': 'error',
        'testing-library/no-unnecessary-act': 'error',
        'testing-library/prefer-explicit-assert': 'error',
        'testing-library/prefer-user-event': 'error',
        'testing-library/prefer-wait-for': 'error',
        'testing-library/render-result-naming-convention': 'error',
      },
    },
  ],
};
