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

<section
	class="bg-gradient-to-r from-teal-50 to-emerald-50 py-20 dark:from-teal-950 dark:to-emerald-950"
>
	<div class="container mx-auto px-4 text-center">
		<Badge class="mb-4" style="background-color: {siteConfig.brand.colors.tealGreen}; color: white;"
			>All Services</Badge
		>
		<h1 class="mb-6 text-4xl font-bold md:text-6xl">
			{siteConfig.siteName} <span class="text-primary">Apps</span>
		</h1>
		<p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl">
			Discover our complete suite of digital solutions designed to optimize your work and streamline
			your processes.
		</p>
		<div class="mx-auto grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
			{#each stats as stat}
				<div class="text-center">
					<div
						class="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg"
						style="background-color: {siteConfig.brand.colors.tealGreen}20;"
					>
						<svelte:component
							this={stat.icon}
							class="h-6 w-6"
							style="color: {siteConfig.brand.colors.tealGreen};"
						/>
					</div>
					<div class="text-sm font-semibold">{stat.value}</div>
					<div class="text-muted-foreground text-xs">{stat.description}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
			{#each apps as app}
				<Card class="flex h-full flex-col">
					<CardHeader>
						<div class="mb-4 flex items-center space-x-3">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl text-white"
								style="background-color: {app.bgColor};"
							>
								<svelte:component this={app.icon} class="h-6 w-6" />
							</div>
							<div class="flex-1">
								<CardTitle class="text-lg">{app.name}</CardTitle>
								<div class="mt-1 flex items-center space-x-2">
									<Badge
										variant={app.status === 'Active'
											? 'default'
											: app.status === 'In Development'
												? 'secondary'
												: 'outline'}
										class="text-xs"
									>
										{app.status}
									</Badge>
									<Badge variant="outline" class="text-xs">{app.category}</Badge>
								</div>
							</div>
						</div>
					</CardHeader>
					<CardContent class="flex flex-1 flex-col">
						<p class="text-muted-foreground mb-6 text-sm">
							{app.description}
						</p>

						<div class="mb-6">
							<h4 class="mb-3 text-sm font-semibold">Key Features:</h4>
							<ul class="text-muted-foreground grid grid-cols-1 gap-1 text-xs">
								{#each app.features.slice(0, 6) as feature}
									<li class="flex items-center space-x-2">
										<div
											class="h-1 w-1 rounded-full"
											style="background-color: {app.bgColor};"
										></div>
										<span>{feature}</span>
									</li>
								{/each}
								{#if app.features.length > 6}
									<li class="text-muted-foreground/70 mt-1 text-xs">
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
								class="w-full"
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

<section class="bg-muted/50 py-16">
	<div class="container mx-auto px-4 text-center">
		<h2 class="mb-6 text-3xl font-bold">Ready to Get Started?</h2>
		<p class="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
			Join our launch celebration and experience the power of unified digital solutions.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<Button size="lg" href="/contact">
				{siteConfig.cta.secondary}
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
			<Button variant="outline" size="lg" href="/about">Learn More About Us</Button>
		</div>
	</div>
</section>
