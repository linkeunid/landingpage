// Brand + SEO facts in one place; mirrors s-app's shape.
export const site = {
	name: 'Linkeun Mono',
	prodHost: 'www.linkeun.com',
	description:
		'Linkeun Mono is the studio behind lkmn.link, the free URL shortener, and Newda, a map of anime, manga and light novels.',
	keywords: ['Linkeun Mono', 'Linkeun', 'lkmn.link', 'url shortener', 'Newda'],
	publisher: 'Linkeun Mono',
	publisherUrl: 'https://www.linkeun.com',
	email: 'hello@linkeun.com',
	twitter: '@linkeunid',
	sameAs: [
		'https://github.com/linkeunid',
		'https://instagram.com/linkeunid',
		'https://threads.net/linkeunid'
	],
	ogImage: '/og.png',
	indexed: ['/']
} as const;

// beta, previews and localhost stay out of search results
export const isProd = (url: URL) => url.hostname === site.prodHost;

export const jsonLd = (origin: string) => ({
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Organization',
			'@id': `${site.publisherUrl}/#org`,
			name: site.publisher,
			url: site.publisherUrl,
			email: site.email,
			sameAs: site.sameAs
		},
		{
			'@type': 'WebSite',
			name: site.name,
			url: origin,
			description: site.description,
			publisher: { '@id': `${site.publisherUrl}/#org` }
		}
	]
});
