<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { siteConfig } from '$lib/config/site';
	import {
		BarChart3,
		ChevronRight,
		CreditCard,
		ExternalLink,
		Grid3X3,
		Wrench
	} from '@lucide/svelte';
	import { appsLink } from '../config/apps';

	// App data for the launcher
	const apps = [
		{
			name: 'Developer Tools',
			description: 'Shortlinks, converters, formatters',
			url: appsLink.developerTools,
			icon: Wrench,
			bgColor: siteConfig.brand.colors.tealGreen
		},
		{
			name: 'TopUp Platform',
			description: 'Game & social media vouchers',
			url: appsLink.topUpPlatform,
			icon: CreditCard,
			bgColor: siteConfig.brand.colors.warmGold
		},
		{
			name: 'Main Dashboard',
			description: 'Account & platform management',
			url: appsLink.mainDashboard,
			icon: BarChart3,
			bgColor: '#6366f1'
		}
	];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class={buttonVariants({ variant: 'ghost', size: 'icon' })}
		aria-label="App launcher"
	>
		<Grid3X3 class="h-5 w-5" />
		<span class="sr-only">Open app launcher</span>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end" class="w-80 p-4">
		<div class="mb-3">
			<h3 class="text-muted-foreground mb-2 text-sm font-semibold">
				{siteConfig.siteName} Services
			</h3>
		</div>
		<div class="grid grid-cols-1 gap-2">
			{#each apps as app}
				<a
					href={app.url}
					target="_blank"
					rel="noopener noreferrer"
					class="hover:bg-muted/50 group flex items-center space-x-3 rounded-lg p-3 transition-colors"
				>
					<div
						class="flex h-10 w-10 items-center justify-center rounded-lg text-white"
						style="background-color: {app.bgColor};"
					>
						<svelte:component this={app.icon} class="h-5 w-5" />
					</div>
					<div class="min-w-0 flex-1">
						<div class="group-hover:text-primary text-sm font-medium transition-colors">
							{app.name}
						</div>
						<div class="text-muted-foreground text-xs">
							{app.description}
						</div>
					</div>
					<ExternalLink
						class="text-muted-foreground h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
					/>
				</a>
			{/each}
		</div>
		<div class="mt-4 border-t pt-3">
			<a
				href="/apps"
				class="text-muted-foreground hover:text-primary flex w-full items-center justify-center py-2 text-sm transition-colors"
			>
				View all apps
				<ChevronRight class="ml-1 h-4 w-4" />
			</a>
		</div>
	</DropdownMenu.Content>
</DropdownMenu.Root>
