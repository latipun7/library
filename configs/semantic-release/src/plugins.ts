import type { Options as WriterOpts } from 'conventional-changelog-writer';
import type { Options as ParserOpts } from 'conventional-commits-parser';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import type { PluginSpec } from 'semantic-release';

const preset = 'conventionalcommits';

const releaseRules = [
  { breaking: true, release: 'major' },
  { revert: true, release: 'patch' },
  { type: 'feat', release: 'minor' },
  { type: 'feature', release: 'minor' },
  { type: 'fix', release: 'patch' },
  { type: 'docs', release: 'patch' },
  { type: 'perf', release: 'patch' },
  { type: 'revert', release: 'patch' },
  { type: 'security', release: 'patch' },
];

const presetConfig = {
  types: [
    { type: 'feat', section: '✨ Features' },
    { type: 'feature', section: '✨ Features' },
    { type: 'fix', section: '🐛 Fixes' },
    { type: 'perf', section: '⚡ Performance Improvements' },
    { type: 'revert', section: '♻️ Reverts' },
    { type: 'docs', section: '📚 Documentations' },
    { type: 'security', section: '🔐 Security Patches' },
    { type: 'style', section: '🎨 Styles', hidden: true },
    { type: 'chore', section: '🧹 Miscellaneous Chores', hidden: true },
    { type: 'refactor', section: '🎯 Code Refactoring', hidden: true },
    { type: 'test', section: '🧪 Tests', hidden: true },
    { type: 'build', section: '🏗️ Builds System', hidden: true },
    { type: 'ci', section: '🚚 Continuous Integrations', hidden: true },
  ],
};

const parserOpts: ParserOpts = {
  referenceActions: [
    'close',
    'closes',
    'closed',
    'fix',
    'fixes',
    'fixed',
    'resolve',
    'resolves',
    'resolved',
    'see',
    'sees',
    'track',
    'tracks',
    'tracked',
  ],
};

const writerOpts: WriterOpts = {
  mainTemplate: readFileSync(
    resolve(__dirname, '..', 'templates', 'main.hbs'),
    { encoding: 'utf-8' }
  ),
  commitPartial: readFileSync(
    resolve(__dirname, '..', 'templates', 'commit-partial.hbs'),
    { encoding: 'utf-8' }
  ),
  partials: {
    importantNotes: '{{{text}}}',
    commitNotes: '{{{body}}}',
  },
  commitGroupsSort: (first, second) => {
    const commitGroupOrder = [
      '✨ Features',
      '🐛 Fixes',
      '🔐 Security Patches',
      '⚡ Performance Improvements',
      '♻️ Reverts',
      '📚 Documentations',
    ];
    const gRankA = commitGroupOrder.indexOf(first.title || '');
    const gRankB = commitGroupOrder.indexOf(second.title || '');

    if (gRankA <= gRankB) return -1;

    return 1;
  },
};

const commitAnalyzerPlugin: PluginSpec = [
  '@semantic-release/commit-analyzer',
  { preset, parserOpts, releaseRules, presetConfig },
];

const releaseNotesGeneratorPlugin: PluginSpec = [
  '@semantic-release/release-notes-generator',
  { preset, parserOpts, writerOpts, presetConfig },
];

const changelogPlugin: PluginSpec = [
  '@semantic-release/changelog',
  {
    changelogFile: 'changelog.md',
    changelogTitle:
      '# Changelog\n\nAll notable changes to this project will be documented in this file.\nThis project adheres to [Semantic Versioning](https://semver.org) and [Conventional Commits](https://www.conventionalcommits.org) for commit guidelines.\n\n',
  },
];

const npmPlugin: PluginSpec = '@semantic-release/npm';

const vscePlugin: PluginSpec = ['semantic-release-vsce', { packageVsix: true }];

const gitPlugin: PluginSpec = [
  '@semantic-release/git',
  {
    message:
      'chore(release): publish <%= nextRelease.gitTag %> 📦🚀\n\n[skip ci]',
    assets: [
      'changelog.md',
      'package.json',
      'package-lock.json',
      'npm-shrinkwrap.json',
      'yarn.lock',
    ],
  },
];

const githubPlugin: PluginSpec = '@semantic-release/github';

const githubVSCEPlugin: PluginSpec = [
  '@semantic-release/github',
  { assets: '*.vsix' },
];

const plugins: PluginSpec[] = [
  commitAnalyzerPlugin,
  releaseNotesGeneratorPlugin,
  changelogPlugin,
  npmPlugin,
  gitPlugin,
  githubPlugin,
];

const vscePlugins: PluginSpec[] = [
  commitAnalyzerPlugin,
  releaseNotesGeneratorPlugin,
  changelogPlugin,
  vscePlugin,
  gitPlugin,
  githubVSCEPlugin,
];

export { plugins, vscePlugins };
