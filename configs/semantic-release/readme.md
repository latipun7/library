# `@latipun7/releaserc 🐱‍👤🚀`

[![Discord][discord-image]][discord-url]
[![GitHub Workflow Status][workflow-image]][workflow-url]
[![NPM Package][npm-image]][npm-url]

> **Latipun Semantic-Realease**
>
> Nerdy Ninja's shareable Semantic Release configuration 🐱‍👤🚀

## About

Shareable `semantic-release` configuration enforcing [conventional commits](https://conventionalcommits.org/).

Use with [semantic-release](https://npm.im/semantic-release) and [semantic-release-monorepo](https://npm.im/semantic-release-monorepo).

## Getting started

- Standard repository

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

- Monorepo

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

## Hacking to the Gate~! 🐱‍💻🎶

[MIT License][license-url] © Latif Sulistyo

<!-- Variables -->

[discord-image]: https://img.shields.io/discord/758271814153011201?label=Developers%20Indonesia&logo=discord&style=flat-square
[discord-url]: https://discord.gg/njSj2Nq "Chat and discuss at Developers Indonesia"
[workflow-image]: https://img.shields.io/github/workflow/status/latipun7/library/Continuous%20Integration%20and%20Continuous%20Delivery%20%E2%9A%99%F0%9F%9A%80?label=CI%2FCD&logo=github%20actions&style=flat-square
[workflow-url]: https://github.com/latipun7/library/actions "GitHub Actions"
[npm-image]: https://img.shields.io/npm/v/@latipun7/releaserc?label=package&logo=npm&style=flat-square
[npm-url]: https://npmjs.org/package/@latipun7/releaserc "@latipun7/releaserc on NPM"
[license-url]: https://github.com/latipun7/library/blob/main/license "MIT License"
