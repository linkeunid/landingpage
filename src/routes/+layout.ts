import { defineBaseMetaTags } from 'svelte-meta-tags';
import { getLocale } from '#lib/paraglide/runtime.js';
import { isProd, site } from '#lib/data/site.js';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
	const canonical = url.origin + url.pathname;
	return {
		...defineBaseMetaTags({
			title: site.name,
			titleTemplate: `%s • ${site.name}`,
			description: site.description,
			keywords: [...site.keywords],
			canonical,
			robots: isProd(url) ? 'index,follow' : 'noindex,nofollow',
			openGraph: {
				type: 'website',
				siteName: site.name,
				url: canonical,
				locale: getLocale() === 'id' ? 'id_ID' : 'en_US',
				images: [
					{
						url: url.origin + site.ogImage,
						width: 1200,
						height: 630,
						alt: site.name
					}
				]
			},
			twitter: {
				cardType: 'summary_large_image',
				site: site.twitter,
				image: url.origin + site.ogImage
			},
			additionalMetaTags: [
				{ name: 'author', content: site.publisher },
				{ name: 'publisher', content: site.publisher },
				{ name: 'referrer', content: 'strict-origin-when-cross-origin' },
				{ name: 'theme-color', content: '#131b2c' }
			]
		})
	};
};
