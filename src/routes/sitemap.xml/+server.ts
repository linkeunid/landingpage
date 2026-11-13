import { locales, localizeUrl } from '#lib/paraglide/runtime.js';
import { site } from '#lib/data/site.js';

// ponytail: static list of public pages, every locale's URL; hreflang pairs live in the page <head>
export const GET = ({ url }) =>
	new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${site.indexed
			.flatMap((p) => locales.map((locale) => localizeUrl(new URL(p, url.origin), { locale })))
			.map((u) => `\t<url><loc>${u.href}</loc></url>`)
			.join('\n')}\n</urlset>\n`,
		{ headers: { 'content-type': 'application/xml' } }
	);
