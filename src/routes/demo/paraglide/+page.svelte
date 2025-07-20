<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
	import { ExternalLink, Globe, ArrowLeft, Code } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Alert, AlertDescription } from '$lib/components/ui/alert';
</script>

<svelte:head>
	<title>Paraglide i18n Demo - Linkeun Mono</title>
	<meta name="description" content="Interactive internationalization demo with multiple language support." />
</svelte:head>

<section class="zen-spacing">
	<div class="zen-section">
		<!-- Header -->
		<div class="mb-20">
			<Button variant="ghost" href="/demo" class="zen-button mb-8">
				<ArrowLeft class="w-4 h-4 mr-2" />
				Back to Demos
			</Button>
			
			<div class="text-center">
				<Badge class="mb-8 px-4 py-2 bg-primary/10 text-primary border-primary/20 font-light">
					<Globe class="w-3 h-3 mr-1" />
					Internationalization
				</Badge>
				<h1 class="text-3xl md:text-5xl mb-8 zen-text max-w-2xl mx-auto">
					Paraglide <span class="text-primary">i18n Demo</span>
				</h1>
				<p class="text-lg text-muted-foreground max-w-xl mx-auto zen-text">
					Experience real-time language switching with our internationalization system
				</p>
			</div>
		</div>

		<!-- Demo Content -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Language Switcher -->
			<Card class="zen-card p-8">
				<CardHeader class="p-0 mb-8">
					<CardTitle class="flex items-center text-lg font-light mb-4">
						<div class="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 mr-3">
							<Globe class="w-4 h-4 text-primary" />
						</div>
						Language Switcher
					</CardTitle>
					<CardDescription class="zen-text">
						Switch between supported languages and see the content update instantly
					</CardDescription>
				</CardHeader>
				<CardContent class="p-0">
					<div class="space-y-6">
						<div class="flex flex-wrap gap-3">
							<Button variant="outline" class="zen-button" onclick={() => setLocale('en')}>
								🇺🇸 English
							</Button>
							<Button variant="outline" class="zen-button" onclick={() => setLocale('id')}>
								🇮🇩 Bahasa Indonesia
							</Button>
							<Button variant="outline" class="zen-button" onclick={() => setLocale('jp')}>
								🇯🇵 日本語
							</Button>
						</div>
						
						<Alert class="bg-primary/5 border-primary/20">
							<AlertDescription class="zen-text">
								Click any language button above to see the content change dynamically.
							</AlertDescription>
						</Alert>
					</div>
				</CardContent>
			</Card>

			<!-- Demo Output -->
			<Card class="zen-card p-8">
				<CardHeader class="p-0 mb-8">
					<CardTitle class="text-lg font-light mb-4">Live Translation</CardTitle>
					<CardDescription class="zen-text">
						The message below updates based on your selected language
					</CardDescription>
				</CardHeader>
				<CardContent class="p-0">
					<div class="text-center py-12">
						<h2 class="text-2xl md:text-3xl font-light text-primary mb-6">
							{m.hello_world({ name: 'SvelteKit User' })}
						</h2>
						<p class="text-muted-foreground zen-text">
							This content is dynamically translated using Paraglide
						</p>
					</div>
				</CardContent>
			</Card>
		</div>

		<!-- Developer Information -->
		<Card class="zen-card p-8 mt-12">
			<CardHeader class="p-0 mb-8">
				<CardTitle class="flex items-center text-lg font-light mb-4">
					<div class="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 mr-3">
						<Code class="w-4 h-4 text-primary" />
					</div>
					For Developers
				</CardTitle>
				<CardDescription class="zen-text">
					Tools and resources for implementing internationalization
				</CardDescription>
			</CardHeader>
			<CardContent class="p-0">
				<div class="space-y-6">
					<p class="text-sm text-muted-foreground zen-text">
						This demo uses Paraglide JS for type-safe internationalization. The language switching is handled client-side with instant updates.
					</p>
					
					<div class="border rounded-lg p-6 bg-muted/30">
						<p class="text-sm font-light mb-3">💡 Development Tip:</p>
						<p class="text-sm text-muted-foreground zen-text">
							If you use VSCode, install the 
							<a 
								href="https://marketplace.visualstudio.com/items?itemName=inlang.vs-code-extension" 
								target="_blank" 
								rel="noopener noreferrer" 
								class="inline-flex items-center text-primary hover:underline"
							>
								Sherlock i18n extension
								<ExternalLink class="w-3 h-3 ml-1" />
							</a> 
							for a better internationalization development experience.
						</p>
					</div>

					<Button variant="outline" href="https://inlang.com/m/gerre34r/library-inlang-paraglideJs" target="_blank" rel="noopener noreferrer" class="zen-button w-full sm:w-auto">
						<ExternalLink class="w-4 h-4 mr-2" />
						Learn More About Paraglide
					</Button>
				</div>
			</CardContent>
		</Card>
	</div>
</section>
