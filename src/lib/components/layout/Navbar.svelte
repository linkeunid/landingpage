<script lang="ts">
	import { resolve } from '$app/paths';
	import { localizeHref } from '#lib/paraglide/runtime.js';
	import { site } from '#lib/data/site.js';
	import ThemeToggle from './ThemeToggle.svelte';
	import LocaleToggle from './LocaleToggle.svelte';
	import AppSwitcher from './AppSwitcher.svelte';
</script>

<header class="navbar">
	<a href={resolve(localizeHref('/') as '/')} class="navbar__mark">{site.name}</a>

	<div class="navbar__end">
		<LocaleToggle />
		<ThemeToggle />
		<AppSwitcher />
	</div>
</header>
