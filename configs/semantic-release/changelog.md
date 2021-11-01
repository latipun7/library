# Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org) and [Conventional Commits](https://www.conventionalcommits.org) for commit guidelines.

## [@latipun7/releaserc-v2.1.1](https://github.com/latipun7/library/compare/@latipun7/releaserc@2.1.0...@latipun7/releaserc@2.1.1) (2021-11-01)

### 🐛 Fixes

- specify `peerDependencies` explicitly [`2eda436`](https://github.com/latipun7/library/commit/2eda43686d003cd34129d121fbac08de770f6a63).

## [@latipun7/releaserc-v2.1.0](https://github.com/latipun7/library/compare/@latipun7/releaserc@2.0.0...@latipun7/releaserc@2.1.0) (2021-10-05)

### ✨ Features

- **releaserc:** disable mentions in changelog [`76d1e85`](https://github.com/latipun7/library/commit/76d1e85ce846354f06749b8b2c70571625470246).

  Leveraging GitHub release's contributors, now disabling mentions in
  changelog, since it's a little buggy too (detecting user mentions when
  mentioning scoped package name).

## [@latipun7/releaserc-v2.0.0](https://github.com/latipun7/library/compare/@latipun7/releaserc@1.0.0...@latipun7/releaserc@2.0.0) (2021-10-04)

### ⚠ BREAKING CHANGES

- **deps:** The minimum required version of node is now v14.17.

  This is a maintenance release. An increasing amount of dependencies
  required a node version higher than the Node 10 version supported by
  `semantic-release@17`. We decided to go straight to a recent Node LTS
  version because the release build is usually independent of others,
  requiring a higher node version is less disruptive to users, but helps us
  reduce the maintenance overhead.

### 🏗️ Builds System

- **deps:** update semantic-release monorepo ([#28](https://github.com/latipun7/library/issues/28)) [`05641c1`](https://github.com/latipun7/library/commit/05641c1bdbf00dfb650c152c2d88c48afcb2dfdb).

## @latipun7/releaserc-v1.0.0 (2021-08-12)

### ✨ Features

- **releaserc:** initial release ✨🚀 [`9c3ec6f`](https://github.com/latipun7/library/commit/9c3ec6fe883a83abe4f7413916b21a6cc7ff2afb).

  - Semantic Release adheres to [conventional commits specs](https://www.conventionalcommits.org/en/v1.0.0/#specification).
  - Add commit `type`: feature, revert, security.
  - Extends release notes from [conventionalcommits preset](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits).
  - Custom release notes & changelog.
  - Lot of customizations on [writerOpts](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-writer#options).
  - Note Groups with emoji 😎
  - 6 commit types for changelog: feat/feature, fix, docs, perf, revert, security.

- **releaserc:** no release notes on release commit [`853799a`](https://github.com/latipun7/library/commit/853799aafb3ca24cbca455059b478d43dbc0f30f).
