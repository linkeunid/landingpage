<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { ExternalLink, Code, Globe } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Demo - Linkeun Mono</title>
	<meta name="description" content="Explore demo pages and features of Linkeun Mono platform." />
</svelte:head>

<section class="zen-spacing">
	<div class="zen-section">
		<div class="text-center mb-20">
			<Badge class="mb-8 px-4 py-2 bg-primary/10 text-primary border-primary/20 font-light">Demo Pages</Badge>
			<h1 class="text-3xl md:text-5xl mb-8 zen-text max-w-2xl mx-auto">
				Platform <span class="text-primary">Demos</span>
			</h1>
			<p class="text-lg text-muted-foreground max-w-xl mx-auto zen-text">
				Explore different features and components of our platform
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
			<Card class="zen-card p-8 text-center">
				<CardHeader class="p-0 mb-8">
					<div class="flex items-center justify-center space-x-3 mb-4">
						<div class="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
							<Globe class="h-5 w-5 text-primary" />
						</div>
						<CardTitle class="text-lg font-light">Paraglide i18n</CardTitle>
					</div>
					<CardDescription class="zen-text">
						Internationalization demo with multiple language support
					</CardDescription>
				</CardHeader>
				<CardContent class="p-0">
					<p class="text-sm text-muted-foreground mb-8 zen-text">
						Test our multilingual capabilities with real-time language switching between English, Indonesian, and Japanese.
					</p>
					<Button href="/demo/paraglide" class="zen-button w-full">
						<Code class="w-4 h-4 mr-2" />
						View Demo
						<ExternalLink class="w-4 h-4 ml-2" />
					</Button>
				</CardContent>
			</Card>

			<Card class="zen-card p-8 text-center opacity-75">
				<CardHeader class="p-0 mb-8">
					<div class="flex items-center justify-center space-x-3 mb-4">
						<div class="w-10 h-10 rounded-full flex items-center justify-center bg-muted">
							<Code class="h-5 w-5 text-muted-foreground" />
						</div>
						<CardTitle class="text-lg font-light text-muted-foreground">More Demos</CardTitle>
					</div>
					<CardDescription class="zen-text">
						Additional platform features coming soon
					</CardDescription>
				</CardHeader>
				<CardContent class="p-0">
					<p class="text-sm text-muted-foreground mb-8 zen-text">
						We're working on more interactive demos to showcase our platform capabilities.
					</p>
					<Button variant="outline" disabled class="zen-button w-full">
						Coming Soon
					</Button>
				</CardContent>
			</Card>
		</div>

		<div class="mt-20 text-center">
			<Button variant="ghost" class="zen-button" href="/">
				← Back to Home
			</Button>
		</div>
	</div>
</section>
