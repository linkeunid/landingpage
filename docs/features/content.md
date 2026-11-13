# Content

| What                        | Where                        | Notes                                                                                 |
| --------------------------- | ---------------------------- | ------------------------------------------------------------------------------------- |
| Home copy (EN + ID)         | `src/routes/home.ts`         | `COPY.en` is the source; `COPY.id` must keep the same shape (typed as `typeof en`)    |
| Product links, slip example | `src/routes/home.ts` `LINKS` |                                                                                       |
| App switcher                | `src/lib/data/apps.ts`       | one entry per Linkeun Mono app: `name`, `what`, `href`, `mark` (short Latin monogram) |
| Brand, description, socials | `src/lib/data/site.ts`       | also feeds meta tags, JSON-LD and the Contact socials                                 |
| Home `<title>`              | `src/routes/+page.ts`        | rendered as `<title> • Linkeun Mono`; never set it to the brand alone (it doubles)    |
| UI strings (toggles)        | `messages/{en,id}.json`      | Paraglide                                                                             |

- Facts in the copy (privacy claims, "No ads", retention days) mirror each app's own privacy page. Change it there, change it here.
- English is the default. Indonesian shows only after the locale toggle sets the `PARAGLIDE_LOCALE` cookie; there is no `/id` URL.
- Only `www.linkeun.com` is indexed (`site.prodHost`). Beta, previews and localhost get `noindex,nofollow` and `Disallow: /` in `robots.txt`.
- A new app: add it to `apps.ts` here and in every other Linkeun Mono app's switcher; add a Products entry in `home.ts` and `+page.svelte` if it should show on the home page.
