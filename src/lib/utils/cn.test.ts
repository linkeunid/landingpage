import { describe, expect, it } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
	it('drops falsy, later tailwind wins, keeps BEM names', () => {
		expect(cn('link-row', false, null, undefined, 'mb-6', 'mb-4')).toBe('link-row mb-4');
		expect(cn('notice', { 'notice--ok': true, hidden: false })).toBe('notice notice--ok');
	});
});
