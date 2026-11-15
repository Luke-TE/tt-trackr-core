# tt-trackr-core

Shared types, schemas and pure logic for Tabletop Trackr, published to GitHub Packages as `@luke-te/tt-trackr-core`.

## Install

GitHub Packages needs an auth token even for public packages. Use a GitHub token with the `read:packages` scope and add this to your project's `.npmrc`:

```ini
@luke-te:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then:

```sh
pnpm add @luke-te/tt-trackr-core
```

## Development

```sh
pnpm install
pnpm lint && pnpm format:check && pnpm typecheck && pnpm test && pnpm build
```

See [AGENTS.md](AGENTS.md) for conventions and workflow.
