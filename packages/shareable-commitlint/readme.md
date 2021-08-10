# `@latipun/commitlintrc 🐱‍👤👨‍💻`

[![Discord][discord-image]][discord-url]
[![GitHub Workflow Status][workflow-image]][workflow-url]
[![NPM Package][npm-image]][npm-url]

> **Latipun CommitLintRC**
>
> Nerdy Ninja's shareable Commitlint configuration 🐱‍👤👨‍💻

## About

Shareable `commitlint` configuration enforcing [conventional commits](https://conventionalcommits.org/) with additional `security` scope.

Use with [@commitlint/cli](https://npm.im/@commitlint/cli) and [commitizen](https://npm.im/commitizen).

## Getting started

- Minimal usage, only CLI

  ```sh
  yarn add -D @latipun/commitlintrc @commitlint/cli
  echo "module.exports = {extends: ['@latipun/commitlintrc']};" > commitlint.config.js
  ```

- With commitizen

  ```sh
  yarn add -D @latipun/commitlintrc @commitlint/cli @commitlint/cz-commitlint commitizen inquirer
  echo "module.exports = {extends: ['@latipun/commitlintrc']};" > commitlint.config.js
  echo '{"path": "@commitlint/cz-commitlint"}' > .czrc

  # run commitizen
  yarn cz
  ```

## License

[MIT][license-url] © Latif Sulistyo

### Hacking to the Gate~! 🐱‍💻🎶

<!-- Variables -->

[discord-image]: https://img.shields.io/discord/758271814153011201?label=Developers%20Indonesia&logo=discord&style=flat-square
[discord-url]: https://discord.gg/njSj2Nq "Chat and discuss at Developers Indonesia"
[workflow-image]: https://img.shields.io/github/workflow/status/latipun7/library/Continuous%20Integration%20and%20Continuous%20Delivery%20%E2%9A%99%F0%9F%9A%80?label=CI%2FCD&logo=github%20actions&style=flat-square
[workflow-url]: https://github.com/latipun7/library/actions "GitHub Actions"
[npm-image]: https://img.shields.io/npm/v/@latipun/commitlintrc?label=package&logo=npm&style=flat-square
[npm-url]: https://npmjs.org/package/@latipun/commitlintrc "@latipun/commitlintrc on NPM"
[license-url]: https://github.com/latipun7/library/blob/main/license "MIT License"
