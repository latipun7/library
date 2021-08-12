# `@latipun7/tsconfig 🐱‍👤🎯`

[![discord-image]][discord-url]
[![workflow-image]][workflow-url]
[![npm-image]][npm-url]

> **Latipun TypeScript Configuration**
>
> Nerdy Ninja's shareable TypeScript [configuration](https://www.typescriptlang.org/tsconfig/) 🐱‍👤🎯

```sh
yarn add -D @latipun7/tsconfig typescript
```

- NodeJS ESModule target

  ```json
  // tsconfig.json
  {
    "extends": "@latipun7/tsconfig/esm",
    "include": ["src/**/*", "**/*.config.ts"],
    "exclude": ["**/node_modules", "**/dist"],
    "compilerOptions": {}
  }
  ```

- NextJS apps

  ```json
  // tsconfig.json
  {
    "extends": "@latipun7/tsconfig/next",
    "include": ["src/**/*", "**/*.config.ts"],
    "exclude": ["**/node_modules", "**/dist"],
    "compilerOptions": {}
  }
  ```

- NodeJS CommonJS target

  ```json
  // tsconfig.json
  {
    "extends": "@latipun7/tsconfig/cjs",
    "include": ["src/**/*", "**/*.config.ts"],
    "exclude": ["**/node_modules", "**/dist"],
    "compilerOptions": {}
  }
  ```

## License

[MIT] © Latif Sulistyo

### Hacking to the Gate~! 🐱‍💻🎶

<!-- Variables -->

[discord-image]: https://img.shields.io/discord/758271814153011201?label=Developers%20Indonesia&logo=discord&style=flat-square
[discord-url]: https://discord.gg/njSj2Nq "Chat and discuss at Developers Indonesia"
[workflow-image]: https://img.shields.io/github/workflow/status/latipun7/library/Continuous%20Integration%20and%20Continuous%20Delivery%20%E2%9A%99%F0%9F%9A%80?label=CI%2FCD&logo=github%20actions&style=flat-square
[workflow-url]: https://github.com/latipun7/library/actions "GitHub Actions"
[npm-image]: https://img.shields.io/npm/v/@latipun7/tsconfig?label=package&logo=npm&style=flat-square
[npm-url]: https://npmjs.org/package/@latipun7/tsconfig "@latipun7/tsconfig on NPM"
[mit]: https://github.com/latipun7/library/blob/main/license "MIT License"
