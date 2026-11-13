# Content

| What                        | Where                        | Notes                                                                                  |
| --------------------------- | ---------------------------- | -------------------------------------------------------------------------------------- |
| Home copy (EN + ID)         | `src/routes/home.ts`         | `COPY.en` is the source; `COPY.id` must keep the same shape (typed as `typeof en`)     |
| Product links, slip example | `src/routes/home.ts` `LINKS` |                                                                                        |
| App switcher                | `src/lib/data/apps.ts`       | one entry per Linkeun Mono app: `name`, `what`, `href`, `mark` (short Latin monogram)  |
| Brand, description, socials | `src/lib/data/site.ts`       | also feeds meta tags, JSON-LD and the Contact socials                                  |
| Home `<title>`, description | `COPY.*.title/description`   | set in `src/routes/+page.ts`, rendered `<title> • Linkeun Mono`; never the brand alone |
| UI strings (toggles)        | `messages/{en,id}.json`      | Paraglide                                                                              |
| Share card `static/og.png`  | `scripts/og.html`            | edit, then `node scripts/og.mjs` (Playwright screenshot, 1200x630)                     |

- Facts in the copy (privacy claims, "No ads", retention days) mirror each app's own privacy page. Change it there, change it here.
- English lives at `/`, Indonesian at `/id` (Paraglide `url` strategy, `urlPatterns` in `vite.config.ts`). Each page lists both in `hreflang` alternates (`x-default` = en). Internal links go through `resolve(localizeHref(...))`.
- Only `www.linkeun.com` is indexed (`site.prodHost`). Beta, previews and localhost get `noindex,nofollow` and `Disallow: /` in `robots.txt`. Prod `robots.txt` points to `/sitemap.xml`, which lists every `site.indexed` path in each locale.
- A new app: add it to `apps.ts` here and in every other Linkeun Mono app's switcher; add a Products entry in `home.ts` and `+page.svelte` if it should show on the home page.
