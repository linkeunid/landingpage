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

<div class="container mx-auto px-4 py-16">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-12">
			<Badge class="mb-4">Demo Pages</Badge>
			<h1 class="text-4xl font-bold mb-6">
				Platform <span class="text-primary">Demos</span>
			</h1>
			<p class="text-xl text-muted-foreground">
				Explore different features and components of our platform
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<Card class="hover:shadow-lg transition-shadow">
				<CardHeader>
					<div class="flex items-center space-x-2">
						<Globe class="h-6 w-6 text-primary" />
						<CardTitle>Paraglide i18n</CardTitle>
					</div>
					<CardDescription>
						Internationalization demo with multiple language support
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground mb-4">
						Test our multilingual capabilities with real-time language switching between English, Indonesian, and Japanese.
					</p>
					<Button href="/demo/paraglide" class="w-full">
						<Code class="w-4 h-4 mr-2" />
						View Demo
						<ExternalLink class="w-4 h-4 ml-2" />
					</Button>
				</CardContent>
			</Card>

			<Card class="hover:shadow-lg transition-shadow opacity-75">
				<CardHeader>
					<div class="flex items-center space-x-2">
						<Code class="h-6 w-6 text-muted-foreground" />
						<CardTitle class="text-muted-foreground">More Demos</CardTitle>
					</div>
					<CardDescription>
						Additional platform features coming soon
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground mb-4">
						We're working on more interactive demos to showcase our platform capabilities.
					</p>
					<Button variant="outline" disabled class="w-full">
						Coming Soon
					</Button>
				</CardContent>
			</Card>
		</div>

		<div class="mt-12 text-center">
			<Button variant="ghost" href="/">
				← Back to Home
			</Button>
		</div>
	</div>
</div>
