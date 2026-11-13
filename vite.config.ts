import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { execSync } from 'node:child_process';

// short commit SHA → `version` from $app/environment; 'dev' outside a git checkout
const sha = (() => {
	try {
		return execSync('git rev-parse --short HEAD').toString().trim();
	} catch {
		return 'dev';
	}
})();

export default defineConfig({
	plugins: [
		enhancedImages(),
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			inlineStyleThreshold: 1024,
			// Nonces on SSR pages (no prerendered ones). style-src/img-src/connect-src/font-src left open.
			// Non-page responses get frame-ancestors only from handleSecurityHeaders (skipped if this header is set).
			csp: {
				mode: 'auto',
				directives: {
					'script-src': ['self'],
					'object-src': ['none'],
					'base-uri': ['self'],
					'frame-ancestors': ['none']
				}
			},
			version: { name: sha }
		}),

		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			emitTsDeclarations: true,
			// /id/ is its own crawlable URL (hreflang); en stays at /. cookie only for paths without a prefix
			strategy: ['url', 'cookie', 'baseLocale'],
			// no trailing slash on /id: kit 308s /id/ to /id
			urlPatterns: [
				{
					pattern: '/',
					localized: [
						['id', '/id'],
						['en', '/']
					]
				},
				{
					pattern: '/:path(.*)',
					localized: [
						['id', '/id/:path(.*)'],
						['en', '/:path(.*)']
					]
				}
			]
		})
	],
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium', headless: true }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**']
				}
			},

			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
