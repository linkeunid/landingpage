import { isProd } from '#lib/data/site.js';

export const GET = ({ url }) =>
	new Response(isProd(url) ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n', {
		headers: { 'content-type': 'text/plain' }
	});
