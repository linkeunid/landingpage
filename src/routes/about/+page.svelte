<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { siteConfig } from '$lib/config/site';
</script>

<svelte:head>
	<title>About Us - {siteConfig.siteName}</title>
	<meta name="description" content="Learn about {siteConfig.siteName}'s mission to provide the best software development services and digital solutions." />
</svelte:head>

<section class="py-20 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950 dark:to-emerald-950">
	<div class="container mx-auto px-4 text-center">
		<Badge class="mb-4" style="background-color: {siteConfig.brand.colors.tealGreen}; color: white;">Our Story</Badge>
		<h1 class="text-4xl md:text-6xl font-bold mb-6">
			About <span class="text-primary">{siteConfig.siteName}</span>
		</h1>
		<p class="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
			Founded in {siteConfig.company.founded} in {siteConfig.company.location}, we're passionate about 
			building useful platforms in the digital world and helping people optimize their work.
		</p>
	</div>
</section>

<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl font-bold mb-6">Our Mission</h2>
				{#each siteConfig.mission as mission}
					<p class="text-lg text-muted-foreground mb-4">
						{mission}
					</p>
				{/each}
				<p class="text-lg text-muted-foreground mb-6">
					Based on market research, many people complain about the excessive number of websites and software 
					they use and the need to manage them. Therefore, {siteConfig.siteName} is here to provide an all-in-one 
					platform with single-factor authentication and the ability to use all available platforms.
				</p>
			</div>
			<div class="bg-card rounded-lg p-8 shadow-sm border">
				<div class="grid grid-cols-2 gap-6">
					{#each Object.values(siteConfig.stats) as stat}
						<div class="text-center">
							<div class="text-3xl font-bold" style="color: {siteConfig.brand.colors.tealGreen};">{stat.value}</div>
							<p class="text-sm text-muted-foreground">{stat.label}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-16 bg-muted/50">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">Our Values</h2>
			<p class="text-lg text-muted-foreground">
				The principles that guide everything we do
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
			{#each siteConfig.values as value, i}
				<Card>
					<CardHeader>
						<CardTitle>
							{#if i === 0}
								Best Service Quality
							{:else}
								User-Centric Design
							{/if}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground">
							{value}
						</p>
					</CardContent>
				</Card>
			{/each}
		</div>
		
		<div class="text-center mt-12">
			<p class="text-lg text-muted-foreground">
				{siteConfig.brand.toneOfVoice}
			</p>
		</div>
	</div>
</section>

<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">Our Founder</h2>
			<p class="text-lg text-muted-foreground">
				Meet the passionate individual behind {siteConfig.siteName}
			</p>
		</div>
		
		<div class="max-w-md mx-auto">
			<Card>
				<CardContent class="p-8 text-center">
					<div class="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center" style="background-color: {siteConfig.brand.colors.tealGreen};">
						<span class="text-3xl font-bold text-white">HR</span>
					</div>
					<h3 class="font-semibold text-xl mb-2">{siteConfig.founder.name}</h3>
					<p class="text-sm text-muted-foreground mb-4">{siteConfig.founder.title}</p>
					<p class="text-sm text-muted-foreground mb-4">
						Currently pursuing a bachelor's degree while building innovative SaaS solutions. 
						Passionate about creating all-in-one platforms that help businesses and developers optimize their work.
					</p>
					<p class="text-xs text-muted-foreground">
						Founded {siteConfig.siteName} in {siteConfig.company.founded} with a vision to solve 
						the problem of managing multiple platforms by providing unified access through single-factor authentication.
					</p>
				</CardContent>
			</Card>
		</div>
		
		<div class="text-center mt-12">
			<p class="text-sm text-muted-foreground mb-4">
				Based in {siteConfig.company.location}
			</p>
			<p class="text-sm text-muted-foreground">
				"We are a team that is always ready to help, learn, innovate, and grow"
			</p>
		</div>
	</div>
</section>

<section class="py-20 bg-primary text-primary-foreground relative overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary opacity-95"></div>
	<div class="container mx-auto px-4 text-center relative z-10">
		<h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
		<p class="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
			Join us in celebrating our production launch with special pricing. 
			Experience our all-in-one platform for developer tools and digital solutions.
		</p>
		<div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
			<Button variant="secondary" size="lg" class="text-lg px-8 py-6 min-w-[200px]" href="/apps">
				{siteConfig.cta.developers}
			</Button>
			<Button 
				variant="outline" 
				size="lg" 
				class="text-lg px-8 py-6 min-w-[200px] border-primary-foreground text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
				href="/contact"
			>
				{siteConfig.cta.business}
			</Button>
		</div>
		<div class="mt-8 text-sm opacity-75">
			<p>Launch celebration pricing • {siteConfig.company.targetAudience.join(' and ')} welcome</p>
		</div>
	</div>
</section>