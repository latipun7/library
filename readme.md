# `library 🐱‍👤📚`

[![Discord][discord-image]][discord-url]
[![GitHub Workflow Status][workflow-image]][workflow-url]
[![NPM Package][npm-image]][npm-url]

> **Nerdy Ninja's library 🐱‍👤📜**
>
> This monorepo contains all my personal library that contains shareable configurations, code utilities, modules, ui components, and more to come ...

## Currently This Library Contains

- [Shareable `renovate` configuration preset](./.github/renovate.json).
  How to use this config in other repository (your repo):

  - Create `renovate.json` or `.github/renovate.json` relative to the root repository
  - Place this inside the file:

    ```json
    {
      "$schema": "https://docs.renovatebot.com/renovate-schema.json",

      "extends": ["github>latipun7/library//.github/default"]
    }
    ```

  - Fork [this repo](https://github.com/latipun7/renovate-bot) and update the Repo Secret `RENOVATE_TOKEN` with your desired [Personal Access Token](https://github.com/settings/tokens).

  - Update the `.github/renovate-bot-config.json` [settings](https://docs.renovatebot.com/self-hosted-configuration) to your needs.

  - Done.

- [Shareable `commitlint` configuration](./packages/shareable-commitlint)
- [Shareable `semantic-release` configuration](./packages/shareable-release)
- [Shareable `typescript` configuration](./packages/shareable-tsconfig)

## Hacking to the Gate~! 🐱‍💻🎶

[MIT License](./license) © Latif Sulistyo

<!-- Variables -->

[discord-image]: https://img.shields.io/discord/758271814153011201?label=Developers%20Indonesia&logo=discord&style=flat-square
[discord-url]: https://discord.gg/njSj2Nq "Chat and discuss at Developers Indonesia"
[workflow-image]: https://img.shields.io/github/workflow/status/latipun7/library/Continuous%20Integration%20and%20Continuous%20Delivery%20%E2%9A%99%F0%9F%9A%80?label=CI%2FCD&logo=github%20actions&style=flat-square
[workflow-url]: https://github.com/latipun7/library/actions "GitHub Actions"
[npm-image]: https://img.shields.io/badge/NPM-latipun7-blue?style=flat-square&logo=npm
[npm-url]: https://www.npmjs.com/~latipun7 "latipun's packages on NPM"
