import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit/hooks';
import { getTextDirection } from '#lib/paraglide/runtime.js';
import { paraglideMiddleware } from '#lib/paraglide/server.js';
import { createInitialModeExpression } from 'mode-watcher';
import { site } from '#lib/data/site.js';

// body 400/700, title 900, mono 400: latin woff2 only (the .woff fallbacks would double the bytes)
const PRELOAD_FONT =
	/(zen-kaku-gothic-new-latin-[47]00|zen-old-mincho-latin-900|ibm-plex-mono-latin-400)-normal\.[\w-]+\.woff2$/;
// mode-watcher FOUC script, in app.html so it gets the CSP nonce; keep in sync with <ModeWatcher> props
const MODE_SCRIPT = createInitialModeExpression({ defaultMode: 'dark' });

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) =>
		resolve(
			{ ...event, request },
			{
				// default js+css, plus the latin fonts every page paints with: otherwise found only after the CSS parses (late text swap)
				preload: ({ type, path }) => type !== 'font' || PRELOAD_FONT.test(path),
				transformPageChunk: ({ html }) =>
					html
						.replace('%paraglide.lang%', locale)
						.replace('%paraglide.dir%', getTextDirection(locale))
						.replace('%modewatcher.snippet%', () => MODE_SCRIPT)
			}
		)
	);

export const handleSecurityHeaders: Handle = async ({ event, resolve }) => {
	let res = await resolve(event);
	const set: [string, string][] = [
		['X-Frame-Options', 'DENY'],
		// fallback for non-page responses; pages get the full kit.csp header (vite.config.ts), kept as-is
		['Content-Security-Policy', "frame-ancestors 'none'"],
		['X-Content-Type-Options', 'nosniff'],
		['Referrer-Policy', 'strict-origin-when-cross-origin']
	];
	if (event.url.protocol === 'https:')
		set.push(['Strict-Transport-Security', 'max-age=31536000; includeSubDomains']);
	const apply = () => {
		for (const [k, v] of set) if (!res.headers.has(k)) res.headers.set(k, v);
	};
	try {
		apply();
	} catch {
		// fetch() responses have immutable headers
		res = new Response(res.body, res);
		apply();
	}
	return res;
};

// linkeun.com and www both route to this Worker; one canonical host keeps SEO and cookies on www
const handleApex: Handle = ({ event, resolve }) => {
	if (`www.${event.url.hostname}` !== site.prodHost) return resolve(event);
	const to = new URL(event.url);
	to.hostname = site.prodHost;
	return Response.redirect(to, 301);
};

export const handle = sequence(handleApex, handleSecurityHeaders, handleParaglide);
