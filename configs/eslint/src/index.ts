import { hasNextJS, hasPrettier, hasTestingLibrary } from './utils';

function getPrettierRules() {
  return hasPrettier ? 'plugin:prettier/recommended' : null;
}

module.exports = {
  root: true,
  extends: ['./eslint', './import', getPrettierRules()].filter(Boolean),
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['./typescript', getPrettierRules()].filter(Boolean),
    },
    {
      files: ['**/*.{jsx,tsx}'],
      extends: [
        './react',
        hasNextJS ? './next' : null,
        getPrettierRules(),
      ].filter(Boolean),
    },
    {
      files: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/*.{spec,test}.[jt]s?(x)',
        '**/{jest,test,tests}.{setup,utils,helper}.[jt]s?(x)',
      ],
      extends: [
        './jest',
        hasTestingLibrary ? './testing-library' : null,
        getPrettierRules(),
      ].filter(Boolean),
    },
  ],
};
