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

<section class="py-20 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950 dark:to-emerald-950">
	<div class="container mx-auto px-4 text-center">
		<Badge class="mb-4" style="background-color: {siteConfig.brand.colors.tealGreen}; color: white;">SaaS Platform</Badge>
		<h1 class="text-4xl md:text-6xl font-bold mb-6">
			{siteConfig.tagline.split(', ')[0]}, <br />
			<span class="text-primary">{siteConfig.tagline.split(', ')[1]}, {siteConfig.tagline.split(', ')[2]}</span>
		</h1>
		<p class="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
			All-in-one platform providing developer tools, shortlink management, and digital solutions. 
			Helping businesses and developers optimize their work with single-factor authentication.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button size="lg" class="text-lg" href="/contact">{siteConfig.cta.secondary}</Button>
			<Button variant="outline" size="lg" class="text-lg" href="/apps">{siteConfig.cta.developers}</Button>
		</div>
	</div>
</section>

<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">Our Services</h2>
			<p class="text-lg text-muted-foreground">
				Comprehensive digital solutions for businesses and developers
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each siteConfig.services.slice(0, 3) as service, i}
				<Card>
					<CardHeader>
						<CardTitle>{service}</CardTitle>
						<CardDescription>
							{#if i === 0}
								Custom software solutions for your business needs
							{:else if i === 1}
								All-in-one platform with developer tools and analytics
							{:else}
								Responsive and modern web applications
							{/if}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground">
							{#if i === 0}
								We build tailored software solutions that help businesses optimize their operations 
								and achieve their digital transformation goals.
							{:else if i === 1}
								Our SaaS platform provides shortlink management, analytics, and 16+ developer tools 
								in one unified dashboard with single-factor authentication.
							{:else}
								Creating responsive, fast, and modern web applications using the latest technologies 
								and best practices for optimal user experience.
							{/if}
						</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>

<section class="py-16 bg-muted/50">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl font-bold mb-6">Why Choose {siteConfig.siteName}?</h2>
				<div class="space-y-4">
					{#each siteConfig.values as value, i}
						<div class="flex items-start space-x-3">
							<div class="w-2 h-2 rounded-full mt-2" style="background-color: {siteConfig.brand.colors.tealGreen};"></div>
							<div>
								<h3 class="font-semibold">
									{#if i === 0}
										Best Service Quality
									{:else if i === 1}
										User-Centric Design
									{:else}
										Continuous Innovation
									{/if}
								</h3>
								<p class="text-sm text-muted-foreground">
									{value}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div class="bg-card rounded-lg p-8 shadow-sm border">
				<h3 class="text-2xl font-bold mb-4">Launch Celebration!</h3>
				<p class="text-muted-foreground mb-6">
					We're celebrating our production server launch with special pricing. 
					Join us and get started with our platform today!
				</p>
				<Button size="lg" class="w-full" href="/contact">{siteConfig.cta.secondary}</Button>
			</div>
		</div>
	</div>
</section>

<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">Our Current Projects</h2>
			<p class="text-lg text-muted-foreground">
				Building innovative solutions for the digital world
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
			{#each siteConfig.projects as project}
				<Card>
					<CardHeader>
						<CardTitle>{project.name}</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground">
							{project.description}
						</p>
					</CardContent>
				</Card>
			{/each}
		</div>
		<div class="text-center mt-12">
			<p class="text-sm text-muted-foreground mb-4">
				Operating in {siteConfig.countries.join(' and ')} since {siteConfig.company.founded}
			</p>
			<Badge variant="outline">{siteConfig.company.industries.join(' • ')}</Badge>
		</div>
	</div>
</section>
