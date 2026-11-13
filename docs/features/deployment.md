# Deployment

Cloudflare Workers via `@sveltejs/adapter-cloudflare`. Same flow as s-app, without env files (no secrets).

| Env        | Domain                                        | Worker             | Command                |
| ---------- | --------------------------------------------- | ------------------ | ---------------------- |
| production | `www.linkeun.com`, `linkeun.com` (301 to www) | `landingpage`      | `pnpm run deploy`      |
| beta       | `beta.linkeun.com`                            | `landingpage-beta` | `pnpm run deploy:beta` |

Beta is `env.beta` in `wrangler.jsonc`. `routes` (and `vars`, if ever added) aren't inherited from the top level, so set them in both places. The apex redirect lives in `handleApex` (`src/hooks.server.ts`): one canonical host for SEO and the locale cookie.

## First-time setup

1. Authenticate and build:

```sh
pnpm wrangler login
pnpm gen
pnpm run build
```

Rerun `pnpm gen` whenever you change `wrangler.jsonc`.

2. Deploy: `pnpm run deploy:beta`, then `pnpm run deploy`. Use `pnpm run deploy`, not `pnpm deploy` (pnpm built-in).

Custom domains attach on deploy. They fail if the hostname already has a DNS record (e.g. an old Vercel `A`/`CNAME`): delete it in Cloudflare → linkeun.com → DNS → Records first.

## CI (GitHub Actions)

| Workflow                                  | Trigger                       | Does                                                                                                                 |
| ----------------------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `.github/workflows/deploy-beta.yml`       | push to `main`, manual        | `pnpm gen`, paraglide compile, `pnpm check`, server tests, `pnpm run deploy:beta`                                    |
| `.github/workflows/deploy-production.yml` | manual only (from a `v*` tag) | `PROD_MANAGERS` member only: check, server tests, `pnpm run deploy`, then GitHub release; pushing a tag runs nothing |

Repo settings:

- Secrets: `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`. Token = "Edit Cloudflare Workers" template plus, on zone `linkeun.com`: Workers Routes Edit, DNS Edit, Zone Read. Nothing more (no Zone/Zone Settings Edit).
- Variable: `PROD_MANAGERS` (comma-separated GitHub logins allowed to release).
- Environments: `beta` (open), `production` (only `v*` tags). The gate is soft: write access can edit the workflow; required reviewers need GitHub Team.

Notes:

- `worker-configuration.d.ts` and `src/lib/paraglide` are gitignored, so CI runs `pnpm gen` and `paraglide-js compile --emit-ts-declarations` before `pnpm check`.
- **Browser specs don't run in CI** (saves Actions minutes): CI runs `pnpm test --project server` only. Run plain `pnpm test` locally before pushing to `main`.
- A failed check or test skips the deploy; the live Worker keeps its previous version.
- pnpm's minimum release age blocks packages published in the last day. Don't add `minimumReleaseAgeExclude` to get a fresh release; wait.

## Release

```sh
git tag -a vX.Y.Z -m vX.Y.Z && git push origin vX.Y.Z
gh workflow run deploy-production.yml --ref vX.Y.Z   # or Actions → Deploy production → Run workflow → Tags
```

Rollback: run the workflow from the previous tag.

After the deploy job succeeds, the `release` job publishes the GitHub release from `scripts/release-notes.sh` (commits since the previous `v*` tag, grouped: `feat`→Features, `fix`→Fixes, `update`→Improvements, `chore`→Maintenance, plus a compare link). It skips if the release exists (rollback re-runs). Preview: `scripts/release-notes.sh vX.Y.Z`.

Non-version tags (`pre-migrate`: last commit of the old site; `archive/v1-first-landingpage`: the unmerged 2024 branches) are history markers, not releases. Never name them `v*`.

## Checks after a deploy

```sh
curl -sI https://beta.linkeun.com | grep -iE '^(HTTP|strict|x-frame)'   # 200, HSTS, DENY
curl -sI https://linkeun.com | grep -i '^location'                       # https://www.linkeun.com/
curl -s https://www.linkeun.com/robots.txt | tail -2                     # Allow: /
```

Cloudflare's managed robots.txt (zone setting, Security → Bots) prepends its own `Allow: /` block, which overrides our `Disallow: /` on beta. Beta still carries `noindex`; turn the managed file off to serve ours alone.
