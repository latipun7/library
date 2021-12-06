# `@latipun7/eslint-config 🥷👓`

[![Discord][discord-image]][discord-url]
[![GitHub Workflow Status][workflow-image]][workflow-url]
[![NPM Package][npm-image]][npm-url]

> **Latipun ESLint**
>
> 🥷 Nerdy Ninja's shareable ESLint configuration 👓

## About

This shareable `eslint` configuration is heavily inspired by [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

This configuration is designed to be flexible across multiple projects. It supports the following projects:

- [x] JavaScript CommonJS (ES6+ syntax)
- [x] JavaScript ESM (ES6+ syntax)
- [x] TypeScript
- [x] React
- [x] NextJS
- [x] Jest
- [x] Testing Library
- [x] Monorepo
- [x] Prettier

If you found weird behavior or suggestions, please file a [new issue](https://github.com/latipun7/library/issues/new/choose) in this repo.

## Getting started

- Install eslint and this config as one of your project's `devDependencies`:

  ```bin
  yarn add -D eslint @latipun7/eslint-config
  ```

- Extend this config in your eslint [configuration files](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats):

  `.eslintrc.js`

  ```js
  module.exports = {
    extends: "@latipun7",
    rules: {
      // your overrides
    },
  };
  ```

  `package.json`

  ```json
  {
    "eslintConfig": {
      "extends": "@latipun7"
    }
  }
  ```

## Hacking to the Gate~! 🧑‍💻🎶

[MIT License][license-url] © Latif Sulistyo

<!-- Variables -->

[discord-image]: https://img.shields.io/discord/758271814153011201?label=Developers%20Indonesia&logo=discord&style=flat-square
[discord-url]: https://discord.gg/njSj2Nq "Chat and discuss at Developers Indonesia"
[workflow-image]: https://img.shields.io/github/workflow/status/latipun7/library/%E2%9A%99%F0%9F%9A%80?label=CI%2FCD&logo=github-actions&style=flat-square
[workflow-url]: https://github.com/latipun7/library/actions "GitHub Actions"
[npm-image]: https://img.shields.io/npm/v/@latipun7/eslint-config?label=package&logo=npm&style=flat-square
[npm-url]: https://npmjs.org/package/@latipun7/eslint-config "@latipun7/eslint-config on NPM"
[license-url]: https://github.com/latipun7/library/blob/main/license "MIT License"
