<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu';
	import * as Sheet from '$lib/components/ui/sheet';
	import ThemeToggle from '$lib/components/theme-toggle.svelte';
	import AppLauncher from '$lib/components/app-launcher.svelte';
	import { siteConfig } from '$lib/config/site';
	import { ExternalLink, Menu } from '@lucide/svelte';

	let mobileMenuOpen = $state(false);
</script>

<header class="border-b">
	<div class="container mx-auto px-4 py-4">
		<nav class="flex items-center justify-between">
			<!-- Logo/Brand -->
			<div class="flex items-center space-x-2">
				<a href="/" class="text-2xl font-bold hover:text-primary transition-colors">
					{siteConfig.siteName}
				</a>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex">
				<NavigationMenu.Root>
					<NavigationMenu.List>
						<NavigationMenu.Item>
							<NavigationMenu.Link href="/" class="text-foreground hover:text-primary transition-colors">
								Home
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Link href="/about" class="text-foreground hover:text-primary transition-colors">
								About
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Link href="/apps" class="text-foreground hover:text-primary transition-colors">
								Apps
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Link href="/contact" class="text-foreground hover:text-primary transition-colors">
								Contact
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</div>
			
			<!-- Desktop Actions -->
			<div class="hidden md:flex items-center space-x-4">
				<AppLauncher />
				<ThemeToggle />
				<Button variant="ghost" size="sm" href="https://app.linkeun.com/auth" target="_blank" rel="noopener noreferrer">
					Sign In
					<ExternalLink class="w-4 h-4 ml-2" />
				</Button>
				<Button size="sm" href="/contact">{siteConfig.cta.secondary}</Button>
			</div>

			<!-- Mobile Navigation -->
			<div class="md:hidden flex items-center space-x-2">
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
							<Sheet.Description class="text-left text-sm text-muted-foreground">
								Navigate through our platform
							</Sheet.Description>
						</Sheet.Header>
						
						<div class="flex flex-col h-full">
							<!-- Mobile Navigation Links -->
							<nav class="flex-1 py-6">
								<div class="space-y-1">
									<a 
										href="/" 
										class="flex items-center px-3 py-3 text-base font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
										onclick={() => mobileMenuOpen = false}
									>
										Home
									</a>
									<a 
										href="/about" 
										class="flex items-center px-3 py-3 text-base font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
										onclick={() => mobileMenuOpen = false}
									>
										About
									</a>
									<a 
										href="/apps" 
										class="flex items-center px-3 py-3 text-base font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
										onclick={() => mobileMenuOpen = false}
									>
										Apps
									</a>
									<a 
										href="/contact" 
										class="flex items-center px-3 py-3 text-base font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
										onclick={() => mobileMenuOpen = false}
									>
										Contact
									</a>
								</div>
							</nav>
							
							<!-- Mobile Actions -->
							<div class="border-t pt-4 pb-4 space-y-3">
								<div class="px-3">
									<p class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
										Quick Actions
									</p>
									<div class="space-y-2">
										<Button 
											variant="outline" 
											class="w-full justify-start" 
											href="https://app.linkeun.com/auth" 
											target="_blank" 
											rel="noopener noreferrer"
											onclick={() => mobileMenuOpen = false}
										>
											<ExternalLink class="w-4 h-4 mr-2" />
											Sign In
										</Button>
										<Button 
											class="w-full" 
											href="/contact"
											onclick={() => mobileMenuOpen = false}
										>
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