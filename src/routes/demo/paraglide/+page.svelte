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

<div class="container mx-auto px-4 py-16">
	<div class="max-w-4xl mx-auto">
		<!-- Header -->
		<div class="mb-8">
			<Button variant="ghost" href="/demo" class="mb-4">
				<ArrowLeft class="w-4 h-4 mr-2" />
				Back to Demos
			</Button>
			
			<div class="text-center">
				<Badge class="mb-4">
					<Globe class="w-3 h-3 mr-1" />
					Internationalization
				</Badge>
				<h1 class="text-4xl font-bold mb-4">
					Paraglide <span class="text-primary">i18n Demo</span>
				</h1>
				<p class="text-xl text-muted-foreground">
					Experience real-time language switching with our internationalization system
				</p>
			</div>
		</div>

		<!-- Demo Content -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<!-- Language Switcher -->
			<Card>
				<CardHeader>
					<CardTitle class="flex items-center">
						<Globe class="w-5 h-5 mr-2" />
						Language Switcher
					</CardTitle>
					<CardDescription>
						Switch between supported languages and see the content update instantly
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="space-y-4">
						<div class="flex flex-wrap gap-2">
							<Button variant="outline" onclick={() => setLocale('en')}>
								🇺🇸 English
							</Button>
							<Button variant="outline" onclick={() => setLocale('id')}>
								🇮🇩 Bahasa Indonesia
							</Button>
							<Button variant="outline" onclick={() => setLocale('jp')}>
								🇯🇵 日本語
							</Button>
						</div>
						
						<Alert>
							<AlertDescription>
								Click any language button above to see the content change dynamically.
							</AlertDescription>
						</Alert>
					</div>
				</CardContent>
			</Card>

			<!-- Demo Output -->
			<Card>
				<CardHeader>
					<CardTitle>Live Translation</CardTitle>
					<CardDescription>
						The message below updates based on your selected language
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="text-center py-8">
						<h2 class="text-3xl font-bold text-primary mb-4">
							{m.hello_world({ name: 'SvelteKit User' })}
						</h2>
						<p class="text-muted-foreground">
							This content is dynamically translated using Paraglide
						</p>
					</div>
				</CardContent>
			</Card>
		</div>

		<!-- Developer Information -->
		<Card class="mt-8">
			<CardHeader>
				<CardTitle class="flex items-center">
					<Code class="w-5 h-5 mr-2" />
					For Developers
				</CardTitle>
				<CardDescription>
					Tools and resources for implementing internationalization
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					<p class="text-sm text-muted-foreground">
						This demo uses Paraglide JS for type-safe internationalization. 
						The language switching is handled client-side with instant updates.
					</p>
					
					<div class="border rounded-lg p-4 bg-muted/50">
						<p class="text-sm font-medium mb-2">💡 Development Tip:</p>
						<p class="text-sm text-muted-foreground">
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

					<Button variant="outline" href="https://inlang.com/m/gerre34r/library-inlang-paraglideJs" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto">
						<ExternalLink class="w-4 h-4 mr-2" />
						Learn More About Paraglide
					</Button>
				</div>
			</CardContent>
		</Card>
	</div>
</div>
