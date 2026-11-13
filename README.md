# landingpage

SvelteKit site for [www.linkeun.com](https://www.linkeun.com), the Linkeun Mono studio page, on Cloudflare Workers. Apps it links: [lkmn.link](https://lkmn.link), [Newda](https://newda.linkeun.com).

## Setup

```sh
pnpm install
pnpm gen   # worker-configuration.d.ts (gitignored)
pnpm dev
```

No env vars or secrets.

## Commands

| Command                       | Does                                              |
| ----------------------------- | ------------------------------------------------- |
| `pnpm check`                  | `wrangler types --check` + svelte-check           |
| `pnpm lint` / `pnpm format`   | prettier + eslint                                 |
| `pnpm test`                   | vitest (server + browser specs)                   |
| `pnpm gen`                    | `wrangler types` (after `wrangler.jsonc` changes) |
| `pnpm build` / `pnpm preview` | production build, served by `wrangler dev`        |

## Deploy

| Env        | Domain                                          | How                                                                                                                |
| ---------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| beta       | `beta.linkeun.com`                              | auto on push to `main`                                                                                             |
| production | `www.linkeun.com` (+ `linkeun.com`, 301 to www) | `git tag -a vX.Y.Z -m vX.Y.Z && git push origin vX.Y.Z`, then `gh workflow run deploy-production.yml --ref vX.Y.Z` |

Use `pnpm run deploy`, not `pnpm deploy`. Details: [docs/features](docs/features/README.md) ([deployment](docs/features/deployment.md), [content](docs/features/content.md)). Code and style rules: [CLAUDE.md](CLAUDE.md).
