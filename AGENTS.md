# AGENTS.md

Guidance for AI agents working in this repository.

## What this is

`@luke-te/tt-trackr-core`: shared types, schemas and pure logic for Tabletop Trackr. Keep it free of side effects: no network, file system, database or cloud SDK calls, and no UI code.

## Setup

- Node: the version in `.nvmrc`. pnpm: the version in `packageManager` in `package.json`.
- `pnpm install`

## Commands

| Command             | What it does                    |
| ------------------- | ------------------------------- |
| `pnpm lint`         | ESLint                          |
| `pnpm format`       | Prettier, writing fixes         |
| `pnpm format:check` | Prettier, check only            |
| `pnpm typecheck`    | `tsc --noEmit`                  |
| `pnpm test`         | Jest                            |
| `pnpm build`        | Compile `src/` to `dist/` (tsc) |

Run lint, format:check, typecheck, test and build before opening a PR. CI runs the same checks.

## Code conventions

- TypeScript strict, ESM. Relative imports use the `.js` suffix: `import { x } from "./x.js";`.
- The public API is whatever `src/index.ts` exports.
- Tests live next to the code as `*.test.ts` and import from `@jest/globals`. Jest compiles them with @swc/jest, which does not type-check; `pnpm typecheck` covers that.

## Git workflow

- Every change starts from a GitHub issue.
- Branch names: `<type>/<issue-number>-<short-name>`, for example `feat/12-rating-scales`.
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/). commitlint checks every commit in a PR.
- Never push to `main`. Open a PR using the template; the maintainer reviews and merges.
- Releases are automatic: semantic-release on `main` picks the version from commit types (`fix` → patch, `feat` → minor, a `BREAKING CHANGE:` footer → major).

## Security

- Never commit secrets, tokens, `.env` files, private keys, account IDs or personal data. gitleaks runs in CI.
- Pin GitHub Actions to full commit SHAs, with the version in a comment.
