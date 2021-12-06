# `@latipun7/releaserc 🥷🚀`

[![Discord][discord-image]][discord-url]
[![GitHub Workflow Status][workflow-image]][workflow-url]
[![NPM Package][npm-image]][npm-url]

> **Latipun Semantic-Realease**
>
> 🥷 Nerdy Ninja's shareable Semantic Release configuration 🚀

## About

Shareable `semantic-release` configuration enforcing [conventional commits](https://github.com/latipun7/.github/blob/main/commit-message-guide.md).

- Semantic Release adheres to [conventional commits specs](https://www.conventionalcommits.org/en/v1.0.0/#specification).
- Add commit `type`: feature, revert, security.
- Extends release notes from [conventionalcommits preset](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits).
- Custom release notes & changelog.
- Lot of customizations on [writerOpts](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-writer#options).
- Note Groups with emoji 😎
- 6 commit types for changelog: feat/feature, fix, docs, perf, revert, security.

## Getting started

- Standard repository (NPM)

  ```sh
  yarn add -D @latipun7/releaserc semantic-release
  ```

  ```json
  // package.json
  "release": {
    "extends": [
      "@latipun7/releaserc"
    ]
  }
  ```

- Monorepo (NPM)

  ```sh
  yarn add -D @latipun7/releaserc semantic-release semantic-release-monorepo
  ```

  ```json
  // package.json
  "release": {
    "extends": [
      "semantic-release-monorepo",
      "@latipun7/releaserc/monorepo"
    ]
  }
  ```

- VSCode Extension repository

  ```sh
  yarn add -D @latipun7/releaserc semantic-release
  ```

  ```json
  // package.json
  "release": {
    "extends": [
      "@latipun7/releaserc/vsce"
    ]
  }
  ```

## Hacking to the Gate~! 🧑‍💻🎶

[MIT License][license-url] © Latif Sulistyo

<!-- Variables -->

[discord-image]: https://img.shields.io/discord/758271814153011201?label=Developers%20Indonesia&logo=discord&style=flat-square
[discord-url]: https://discord.gg/njSj2Nq "Chat and discuss at Developers Indonesia"
[workflow-image]: https://img.shields.io/github/workflow/status/latipun7/library/%E2%9A%99%F0%9F%9A%80?label=CI%2FCD&logo=github-actions&style=flat-square
[workflow-url]: https://github.com/latipun7/library/actions "GitHub Actions"
[npm-image]: https://img.shields.io/npm/v/@latipun7/releaserc?label=package&logo=npm&style=flat-square
[npm-url]: https://npmjs.org/package/@latipun7/releaserc "@latipun7/releaserc on NPM"
[license-url]: https://github.com/latipun7/library/blob/main/license "MIT License"
