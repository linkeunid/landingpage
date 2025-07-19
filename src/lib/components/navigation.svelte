<script lang="ts">
	import AppLauncher from '$lib/components/app-launcher.svelte';
	import ThemeToggle from '$lib/components/theme-toggle.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu';
	import * as Sheet from '$lib/components/ui/sheet';
	import { siteConfig } from '$lib/config/site';
	import { ExternalLink, Menu } from '@lucide/svelte';

	let mobileMenuOpen = $state(false);
</script>

<header class="border-b">
	<div class="container mx-auto px-4 py-4">
		<nav class="flex items-center justify-between">
			<!-- Logo/Brand -->
			<div class="flex items-center space-x-2">
				<a href="/" class="hover:text-primary text-2xl font-bold transition-colors">
					{siteConfig.siteName}
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex">
				<NavigationMenu.Root>
					<NavigationMenu.List>
						<NavigationMenu.Item>
							<NavigationMenu.Link
								href="/"
								class="text-foreground hover:text-foreground transition-colors"
							>
								Home
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Link
								href="/about"
								class="text-foreground hover:text-foreground transition-colors"
							>
								About
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Link
								href="/apps"
								class="text-foreground hover:text-foreground transition-colors"
							>
								Apps
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Link
								href="/contact"
								class="text-foreground hover:text-foreground transition-colors"
							>
								Contact
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</div>

			<!-- Desktop Actions -->
			<div class="hidden items-center space-x-4 md:flex">
				<AppLauncher />
				<ThemeToggle />
				<Button
					variant="ghost"
					size="sm"
					href="https://app.linkeun.com/auth"
					target="_blank"
					rel="noopener noreferrer"
				>
					Sign In
					<ExternalLink class="ml-2 h-4 w-4" />
				</Button>
				<Button size="sm" href="/contact">{siteConfig.cta.secondary}</Button>
			</div>

			<!-- Mobile Navigation -->
			<div class="flex items-center space-x-2 md:hidden">
				<ThemeToggle />
				<Sheet.Root bind:open={mobileMenuOpen}>
					<Sheet.Trigger>
						<Button variant="ghost" size="icon">
							<Menu class="h-5 w-5" />
							<span class="sr-only">Open menu</span>
						</Button>
					</Sheet.Trigger>
					<Sheet.Content side="right" class="w-[320px] sm:w-[400px]">
						<Sheet.Header class="border-b pb-4">
							<Sheet.Title class="text-left text-xl font-bold">{siteConfig.siteName}</Sheet.Title>
							<Sheet.Description class="text-muted-foreground text-left text-sm">
								Navigate through our platform
							</Sheet.Description>
						</Sheet.Header>

						<div class="flex h-full flex-col">
							<!-- Mobile Navigation Links -->
							<nav class="flex-1 py-6">
								<div class="space-y-1">
									<a
										href="/"
										class="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-3 text-base font-medium transition-colors"
										onclick={() => (mobileMenuOpen = false)}
									>
										Home
									</a>
									<a
										href="/about"
										class="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-3 text-base font-medium transition-colors"
										onclick={() => (mobileMenuOpen = false)}
									>
										About
									</a>
									<a
										href="/apps"
										class="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-3 text-base font-medium transition-colors"
										onclick={() => (mobileMenuOpen = false)}
									>
										Apps
									</a>
									<a
										href="/contact"
										class="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-3 text-base font-medium transition-colors"
										onclick={() => (mobileMenuOpen = false)}
									>
										Contact
									</a>
								</div>
							</nav>

							<!-- Mobile Actions -->
							<div class="space-y-3 border-t pt-4 pb-4">
								<div class="px-3">
									<p
										class="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase"
									>
										Quick Actions
									</p>
									<div class="space-y-2">
										<Button
											variant="outline"
											class="w-full justify-start"
											href="https://app.linkeun.com/auth"
											target="_blank"
											rel="noopener noreferrer"
											onclick={() => (mobileMenuOpen = false)}
										>
											<ExternalLink class="mr-2 h-4 w-4" />
											Sign In
										</Button>
										<Button class="w-full" href="/contact" onclick={() => (mobileMenuOpen = false)}>
											{siteConfig.cta.secondary}
										</Button>
									</div>
								</div>
							</div>
						</div>
					</Sheet.Content>
				</Sheet.Root>
			</div>
		</nav>
	</div>
</header>
