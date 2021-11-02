import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  helpUrl: 'https://www.conventionalcommits.org/en/v1.0.0/',
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 100],
    'header-min-length': [1, 'always', 5],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'feature',
        'fix',
        'perf',
        'revert',
        'docs',
        'security',
        'style',
        'chore',
        'refactor',
        'test',
        'build',
        'ci',
      ],
    ],
  },
  prompt: {
    settings: { scopeEnumSeparator: ',' },
    messages: {
      skip: ':: leave it empty to skip :',
      max: '( maximum %d chars )',
      min: '( %d chars at least )',
      emptyWarning: 'cannot be empty!',
      upperLimitWarning: 'over the limit!',
      lowerLimitWarning: 'below the limit!',
    },
    questions: {
      type: {
        description: "Select the type of change that you're committing",
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          feature: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'A bug fix / patches',
            title: 'Fixes',
            emoji: '🐛',
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '⚡',
          },
          revert: {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '♻️',
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentations',
            emoji: '📚',
          },
          security: {
            description: 'Changes that resolve security vulnerabilities',
            title: 'Security Patches',
            emoji: '🔐',
          },
          style: {
            description:
              'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '🎨',
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            title: 'Miscellaneous Chores',
            emoji: '🧹',
          },
          refactor: {
            description:
              'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '🎯',
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🧪',
          },
          build: {
            description:
              'Changes that affect the build system or external dependencies (example scopes: npm, gulp, make)',
            title: 'Builds System',
            emoji: '🏗️',
          },
          ci: {
            description:
              'Changes to CI configuration files and scripts (example scopes: Github Actions, Travis, Circle, BrowserStack)',
            title: 'Continuous Integrations',
            emoji: '🚚',
          },
        },
      },
      scope: {
        description:
          'What is the scope of this change? (e.g. component or file name)',
      },
      subject: {
        description:
          'Write a short description, imperative sentence of the change',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "closes: #123")',
      },
    },
  },
};

module.exports = Configuration;
