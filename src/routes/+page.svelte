<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { siteConfig } from '$lib/config/site';
</script>

<svelte:head>
	<title>{siteConfig.siteName} - {siteConfig.tagline}</title>
	<meta name="description" content={siteConfig.siteDescription} />
</svelte:head>

<section class="zen-spacing">
	<div class="zen-section text-center">
		<div class="mb-12">
			<Badge class="mb-8 px-4 py-2 bg-primary/10 text-primary border-primary/20 font-light">
				SaaS Platform
			</Badge>
		</div>
		<h1 class="text-3xl md:text-5xl mb-8 zen-text max-w-2xl mx-auto">
			{siteConfig.tagline.split(', ')[0]}, <br />
			<span class="text-primary">{siteConfig.tagline.split(', ')[1]}, {siteConfig.tagline.split(', ')[2]}</span>
		</h1>
		<p class="text-lg text-muted-foreground mb-16 max-w-xl mx-auto zen-text">
			All-in-one platform providing developer tools, shortlink management, and digital solutions.
		</p>
		<div class="flex flex-col sm:flex-row gap-6 justify-center">
			<Button size="lg" class="zen-button px-8 py-3" href="/contact">{siteConfig.cta.secondary}</Button>
			<Button variant="outline" size="lg" class="zen-button px-8 py-3" href="/apps">{siteConfig.cta.developers}</Button>
		</div>
	</div>
</section>

<section class="zen-spacing">
	<div class="zen-section text-center">
		<div class="mb-20">
			<h2 class="text-2xl mb-4">Our Services</h2>
			<p class="text-muted-foreground zen-text max-w-md mx-auto">
				Comprehensive digital solutions
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
			{#each siteConfig.services.slice(0, 3) as service, i}
				<Card class="zen-card p-8 text-center">
					<CardHeader class="pb-6">
						<CardTitle class="text-lg mb-3">{service}</CardTitle>
						<CardDescription class="zen-text">
							{#if i === 0}
								Custom software solutions
							{:else if i === 1}
								All-in-one platform with developer tools
							{:else}
								Responsive and modern web applications
							{/if}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground zen-text">
							{#if i === 0}
								Tailored software solutions that help businesses optimize operations and achieve digital transformation.
							{:else if i === 1}
								Shortlink management, analytics, and 16+ developer tools in one unified dashboard.
							{:else}
								Fast, modern web applications using latest technologies for optimal user experience.
							{/if}
						</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>

<section class="zen-spacing bg-muted/30">
	<div class="zen-section">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
			<div>
				<h2 class="text-2xl mb-8">Why Choose {siteConfig.siteName}?</h2>
				<div class="space-y-8">
					{#each siteConfig.values as value, i}
						<div class="flex items-start space-x-4">
							<div class="w-1 h-1 rounded-full mt-3 bg-primary"></div>
							<div>
								<h3 class="mb-2 font-light">
									{#if i === 0}
										Best Service Quality
									{:else if i === 1}
										User-Centric Design
									{:else}
										Continuous Innovation
									{/if}
								</h3>
								<p class="text-sm text-muted-foreground zen-text">
									{value}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div class="zen-card p-12 text-center">
				<h3 class="text-xl mb-6">Launch Celebration!</h3>
				<p class="text-muted-foreground mb-8 zen-text">
					We're celebrating our production server launch with special pricing.
				</p>
				<Button size="lg" class="zen-button w-full" href="/contact">{siteConfig.cta.secondary}</Button>
			</div>
		</div>
	</div>
</section>

<section class="zen-spacing">
	<div class="zen-section text-center">
		<div class="mb-20">
			<h2 class="text-2xl mb-4">Our Current Projects</h2>
			<p class="text-muted-foreground zen-text max-w-md mx-auto">
				Building innovative solutions
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
			{#each siteConfig.projects as project}
				<Card class="zen-card p-8 text-center">
					<CardHeader class="pb-6">
						<CardTitle class="text-lg">{project.name}</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground zen-text">
							{project.description}
						</p>
					</CardContent>
				</Card>
			{/each}
		</div>
		<div class="mt-20">
			<p class="text-sm text-muted-foreground mb-6 zen-text">
				Operating in {siteConfig.countries.join(' and ')} since {siteConfig.company.founded}
			</p>
			<Badge variant="outline" class="px-4 py-2 font-light border-primary/20 text-primary">
				{siteConfig.company.industries.join(' • ')}
			</Badge>
		</div>
	</div>
</section>
