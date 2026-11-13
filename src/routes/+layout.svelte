<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import { IconContext } from 'phosphor-svelte';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';
	import { page } from '$app/state';
	import Shoji from '#lib/components/layout/Shoji.svelte';
	import GrainOverlay from '#lib/components/layout/GrainOverlay.svelte';
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import ToTop from '#lib/components/layout/ToTop.svelte';

	let { data, children } = $props();

	let mergedMeta = $derived(
		deepMerge(
			data.baseMetaTags,
			// keep 404/410/5xx pages out of search results
			page.error
				? { title: String(page.status), robots: 'noindex,nofollow' }
				: page.data.pageMetaTags
		)
	);
</script>

<MetaTags {...mergedMeta} />
<!-- FOUC script lives in app.html (CSP nonce), filled by hooks.server.ts -->
<ModeWatcher defaultMode="dark" disableHeadScriptInjection />

<!-- every icon sits beside its own text or aria-label: keep them out of the a11y tree -->
<IconContext values={{ 'aria-hidden': 'true' }}>
	<GrainOverlay />
	<Shoji />
	<Navbar />

	{@render children()}
	<ToTop />
</IconContext>
