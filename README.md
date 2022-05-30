This is the monorepo for Moncel's Gatbsy/NextJS websites. Please use yarn v3.x.

### Apps and Packages

`/apps` contains a separate directory for each site. 
`/packages` contains any shared library modules that we own and that the sites depend on. If you are looking for the `moncel-one-sdk` that is in here as well. 

### Utilities

Code quality tools for the NextJS sites follow a shared config that you can find in `packages`.

- [TypeScript](https://www.typescriptlang.org/) for static type checking and the configuration is in `/packages/tsconfig`
- [ESLint](https://eslint.org/) for code linting and the configuration is in `/packages/config`
- [Prettier](https://prettier.io) for code formatting and the configuration is in `/packages/config`

### Build

To build all apps and shared dependencies together, run the following command from the root of this repo:

```
yarn build
```

When installing a yarn dependency for a specific app, please run `yarn add` and update the `package.json` within the directory for that app, and include `yarn.lock` from the root of the monorepo when making PRs. 

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
