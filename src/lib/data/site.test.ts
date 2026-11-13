import { describe, expect, it } from 'vitest';
import { isProd, jsonLd, site } from './site';

describe('site', () => {
	it('only prod host is indexable', () => {
		expect(isProd(new URL('https://www.linkeun.com/'))).toBe(true);
		expect(isProd(new URL('http://localhost:5173/'))).toBe(false);
		expect(isProd(new URL('https://linkeun.com/'))).toBe(false);
	});
	it('jsonLd has org + website', () => {
		const types = jsonLd('https://www.linkeun.com')['@graph'].map((n) => n['@type']);
		expect(types).toEqual(['Organization', 'WebSite']);
		expect(site.indexed).toEqual(['/']);
	});
});
