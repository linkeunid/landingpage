import { describe, expect, it } from 'vitest';
import { GET } from './+server';

describe('sitemap.xml', () => {
	it('lists every indexed path in each locale', async () => {
		const res = await GET({ url: new URL('https://www.linkeun.com/sitemap.xml') } as never);
		const locs = [...(await res.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
		expect(locs).toEqual(['https://www.linkeun.com/', 'https://www.linkeun.com/id']);
	});
});
