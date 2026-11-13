<!-- Linkeun Mono app switcher: one square per app, set like panes in a lattice. -->
<script lang="ts">
	import { page } from '$app/state';
	import type { Attachment } from 'svelte/attachments';
	import { GridNine } from 'phosphor-svelte';
	import { Popover, PopoverTrigger, PopoverContent } from '#lib/components/ui/Popover.js';
	import { APPS } from '#lib/data/apps.js';

	let open = $state(false);
	const here = (href: string) => new URL(href).hostname === page.url.hostname;
	// alus autoFocus runs before the portal attaches, so focus the first app a frame later
	const focusFirst: Attachment<HTMLElement> = (node) => {
		const raf = requestAnimationFrame(() => node.querySelector('a')?.focus());
		return () => cancelAnimationFrame(raf);
	};
</script>

<Popover bind:open>
	<PopoverTrigger class="app-switcher" aria-label="Linkeun Mono apps">
		<GridNine size={18} weight="regular" />
	</PopoverTrigger>
	<PopoverContent
		placement="bottom-end"
		offset={10}
		class="app-switcher__panel"
		onfocusout={(e) => {
			// tabbed out closes; focus moving to the trigger is a click on it, which alus toggles itself
			const to = e.relatedTarget as HTMLElement | null;
			if (to && !e.currentTarget.contains(to) && !to.closest('.app-switcher')) open = false;
		}}
	>
		<p class="app-switcher__title">Linkeun Mono apps</p>
		<ul class="app-switcher__grid" {@attach focusFirst}>
			{#each APPS as app (app.href)}
				<li>
					<a
						class="app-switcher__app"
						href={app.href}
						rel="external"
						aria-current={here(app.href) ? 'page' : undefined}
						onclick={() => (open = false)}
					>
						<span class="app-switcher__mark" aria-hidden="true">{app.mark}</span>
						<span class="app-switcher__name">{app.name}</span>
						<span class="app-switcher__what">{app.what}</span>
					</a>
				</li>
			{/each}
		</ul>
	</PopoverContent>
</Popover>
