<script lang="ts">
	import { version } from '$app/env';
	import { resolve } from '$app/paths';
	import { localizeHref } from '#lib/paraglide/runtime.js';

	let { note }: { note?: string } = $props();
</script>

{#if note}
	<div class="footer-note">
		<div class="brush-line"></div>
		<p class="footer-note__text">{note}</p>
	</div>
{/if}

<footer class="footer">
	<nav class="footer__links" aria-label="Footer">
		<a class="footer__link" href="{resolve(localizeHref('/') as '/')}#about">About</a>
		<a class="footer__link" href="{resolve(localizeHref('/') as '/')}#contact">Contact</a>
	</nav>
	<!-- colophon: build commit as a small seal -->
	<p class="footer__colophon">
		<span class="sr-only">build</span>
		<span class="footer__seal">{version}</span>
	</p>
</footer>
