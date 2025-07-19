<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { siteConfig } from '$lib/config/site';
	import { appsLink } from '@/lib/config/apps';
	import {
		ArrowRight,
		BarChart3,
		Clock,
		CreditCard,
		ExternalLink,
		Shield,
		Users,
		Wrench,
		Zap
	} from '@lucide/svelte';

	// Extended app data with more details
	const apps = [
		{
			name: 'Developer Tools',
			description:
				'Complete suite of development utilities including shortlinks, converters, formatters, and more',
			url: appsLink.developerTools,
			icon: Wrench,
			bgColor: siteConfig.brand.colors.tealGreen,
			status: 'Active',
			category: 'Development',
			features: [
				'URL Shortener with Analytics',
				'Timestamp Converter',
				'JSON Formatter & Validator',
				'Base64 Encoder/Decoder',
				'QR Code Generator',
				'Password Generator',
				'ASCII Art Generator',
				'Text Analysis Tools',
				'Open Graph Generator',
				'Markdown Editor'
			]
		},
		{
			name: 'TopUp Platform',
			description:
				'Multi-payment gateway platform for game and social media vouchers with instant delivery',
			url: appsLink.topUpPlatform,
			icon: CreditCard,
			bgColor: siteConfig.brand.colors.warmGold,
			status: 'In Development',
			category: 'E-commerce',
			features: [
				'Game Voucher Top-up',
				'Social Media Credits',
				'Multi-Payment Gateway',
				'Instant Delivery',
				'Transaction History',
				'Customer Support',
				'Secure Payments',
				'Mobile-Friendly Interface'
			]
		},
		{
			name: 'Main Dashboard',
			description:
				'Unified platform management with single-factor authentication for all Linkeun Mono services',
			url: appsLink.mainDashboard,
			icon: BarChart3,
			bgColor: '#6366f1',
			status: 'Planning',
			category: 'Platform',
			features: [
				'Single Sign-On (SSO)',
				'Usage Analytics',
				'Account Management',
				'Service Integration',
				'API Key Management',
				'Billing & Subscriptions',
				'User Preferences',
				'Security Settings'
			]
		}
	];

	const stats = [
		{ icon: Zap, ...siteConfig.appsStats.tools },
		{ icon: Shield, ...siteConfig.appsStats.security },
		{ icon: Clock, ...siteConfig.appsStats.availability },
		{ icon: Users, ...siteConfig.appsStats.reach }
	];
</script>

<svelte:head>
	<title>Apps & Services - {siteConfig.siteName}</title>
	<meta
		name="description"
		content="Explore all {siteConfig.siteName} apps and services including Developer Tools, TopUp Platform, and unified dashboard management."
	/>
</svelte:head>

<section class="zen-spacing">
	<div class="zen-section text-center">
		<div class="mb-12">
			<Badge class="mb-8 px-4 py-2 bg-primary/10 text-primary border-primary/20 font-light">
				All Services
			</Badge>
		</div>
		<h1 class="text-3xl md:text-5xl mb-8 zen-text max-w-2xl mx-auto">
			{siteConfig.siteName} <span class="text-primary">Apps</span>
		</h1>
		<p class="text-lg text-muted-foreground mb-16 max-w-xl mx-auto zen-text">
			Discover our complete suite of digital solutions designed to optimize your work.
		</p>
		<div class="mx-auto grid max-w-2xl grid-cols-2 gap-8 md:grid-cols-4">
			{#each stats as stat}
				<div class="text-center">
					<div class="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
						<svelte:component this={stat.icon} class="h-5 w-5 text-primary" />
					</div>
					<div class="text-sm font-light text-primary mb-1">{stat.value}</div>
					<div class="text-muted-foreground text-xs zen-text">{stat.description}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="zen-spacing">
	<div class="zen-section">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3">
			{#each apps as app}
				<Card class="zen-card p-8 flex h-full flex-col text-center">
					<CardHeader class="p-0 mb-8">
						<div class="mb-6 flex flex-col items-center">
							<div class="flex h-12 w-12 items-center justify-center rounded-full mb-4 bg-primary/10">
								<svelte:component this={app.icon} class="h-6 w-6 text-primary" />
							</div>
							<div>
								<CardTitle class="text-lg font-light mb-3">{app.name}</CardTitle>
								<div class="flex items-center justify-center space-x-2">
									<Badge
										variant={app.status === 'Active'
											? 'default'
											: app.status === 'In Development'
												? 'secondary'
												: 'outline'}
										class="text-xs font-light"
									>
										{app.status}
									</Badge>
									<Badge variant="outline" class="text-xs font-light border-primary/20 text-primary">{app.category}</Badge>
								</div>
							</div>
						</div>
					</CardHeader>
					<CardContent class="p-0 flex flex-1 flex-col text-left">
						<p class="text-muted-foreground mb-8 text-sm zen-text text-center">
							{app.description}
						</p>

						<div class="mb-8">
							<h4 class="mb-4 text-sm font-light">Key Features:</h4>
							<ul class="text-muted-foreground grid grid-cols-1 gap-2 text-xs">
								{#each app.features.slice(0, 6) as feature}
									<li class="flex items-center space-x-3">
										<div class="h-1 w-1 rounded-full bg-primary"></div>
										<span class="zen-text">{feature}</span>
									</li>
								{/each}
								{#if app.features.length > 6}
									<li class="text-muted-foreground/70 mt-2 text-xs zen-text">
										+ {app.features.length - 6} more features
									</li>
								{/if}
							</ul>
						</div>

						<div class="mt-auto">
							<Button
								href={app.url}
								target="_blank"
								rel="noopener noreferrer"
								class="zen-button w-full"
								disabled={app.status === 'Planning'}
							>
								{#if app.status === 'Planning'}
									Coming Soon
								{:else if app.status === 'In Development'}
									Preview <ExternalLink class="ml-2 h-4 w-4" />
								{:else}
									Launch App <ExternalLink class="ml-2 h-4 w-4" />
								{/if}
							</Button>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>

<section class="zen-spacing bg-muted/30">
	<div class="zen-section text-center">
		<h2 class="mb-8 text-2xl">Ready to Get Started?</h2>
		<p class="text-muted-foreground mx-auto mb-12 max-w-xl zen-text">
			Join our launch celebration and experience the power of unified digital solutions.
		</p>
		<div class="flex flex-col justify-center gap-6 sm:flex-row">
			<Button size="lg" class="zen-button px-8 py-3" href="/contact">
				{siteConfig.cta.secondary}
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
			<Button variant="outline" size="lg" class="zen-button px-8 py-3" href="/about">Learn More About Us</Button>
		</div>
	</div>
</section>
