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

<section class="zen-spacing">
	<div class="zen-section text-center">
		<div class="mb-12">
			<Badge class="mb-8 px-4 py-2 bg-primary/10 text-primary border-primary/20 font-light">
				Our Story
			</Badge>
		</div>
		<h1 class="text-3xl md:text-5xl mb-8 zen-text max-w-2xl mx-auto">
			About <span class="text-primary">{siteConfig.siteName}</span>
		</h1>
		<p class="text-lg text-muted-foreground mb-16 max-w-xl mx-auto zen-text">
			Founded in {siteConfig.company.founded} in {siteConfig.company.location}, we're passionate about building useful platforms in the digital world.
		</p>
	</div>
</section>

<section class="zen-spacing">
	<div class="zen-section">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
			<div>
				<h2 class="text-2xl mb-8">Our Mission</h2>
				{#each siteConfig.mission as mission}
					<p class="text-muted-foreground mb-6 zen-text">
						{mission}
					</p>
				{/each}
				<p class="text-muted-foreground zen-text">
					Based on market research, many people complain about the excessive number of websites and software they use. {siteConfig.siteName} provides an all-in-one platform with single-factor authentication.
				</p>
			</div>
			<div class="zen-card p-12">
				<div class="grid grid-cols-2 gap-8">
					{#each Object.values(siteConfig.stats) as stat}
						<div class="text-center">
							<div class="text-2xl font-light text-primary mb-2">{stat.value}</div>
							<p class="text-sm text-muted-foreground">{stat.label}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<section class="zen-spacing bg-muted/30">
	<div class="zen-section text-center">
		<div class="mb-20">
			<h2 class="text-2xl mb-4">Our Values</h2>
			<p class="text-muted-foreground zen-text max-w-md mx-auto">
				Principles that guide everything we do
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
			{#each siteConfig.values as value, i}
				<Card class="zen-card p-8 text-center">
					<CardHeader class="pb-6">
						<CardTitle class="text-lg">
							{#if i === 0}
								Best Service Quality
							{:else}
								User-Centric Design
							{/if}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground zen-text">
							{value}
						</p>
					</CardContent>
				</Card>
			{/each}
		</div>
		
		<div class="mt-20">
			<p class="text-muted-foreground zen-text max-w-lg mx-auto">
				{siteConfig.brand.toneOfVoice}
			</p>
		</div>
	</div>
</section>

<section class="zen-spacing">
	<div class="zen-section text-center">
		<div class="mb-20">
			<h2 class="text-2xl mb-4">Our Founder</h2>
			<p class="text-muted-foreground zen-text max-w-md mx-auto">
				Meet the passionate individual behind {siteConfig.siteName}
			</p>
		</div>
		
		<div class="max-w-lg mx-auto">
			<Card class="zen-card p-12 text-center">
				<CardContent class="p-0">
					<div class="w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center bg-primary/10">
						<span class="text-2xl font-light text-primary">HR</span>
					</div>
					<h3 class="text-xl mb-3 font-light">{siteConfig.founder.name}</h3>
					<p class="text-sm text-muted-foreground mb-6">{siteConfig.founder.title}</p>
					<p class="text-sm text-muted-foreground mb-6 zen-text">
						Currently pursuing a bachelor's degree while building innovative SaaS solutions. Passionate about creating all-in-one platforms that help businesses and developers optimize their work.
					</p>
					<p class="text-xs text-muted-foreground zen-text">
						Founded {siteConfig.siteName} in {siteConfig.company.founded} with a vision to solve the problem of managing multiple platforms by providing unified access through single-factor authentication.
					</p>
				</CardContent>
			</Card>
		</div>
		
		<div class="mt-16">
			<p class="text-sm text-muted-foreground mb-4 zen-text">
				Based in {siteConfig.company.location}
			</p>
			<p class="text-sm text-muted-foreground zen-text italic">
				"We are a team that is always ready to help, learn, innovate, and grow"
			</p>
		</div>
	</div>
</section>

<section class="zen-spacing bg-primary text-primary-foreground">
	<div class="zen-section text-center">
		<h2 class="text-3xl mb-8">Ready to Get Started?</h2>
		<p class="text-lg mb-12 opacity-90 max-w-xl mx-auto zen-text">
			Join us in celebrating our production launch with special pricing.
		</p>
		<div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
			<Button variant="secondary" size="lg" class="zen-button px-8 py-3" href="/apps">
				{siteConfig.cta.developers}
			</Button>
			<Button 
				variant="outline" 
				size="lg" 
				class="zen-button px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
				href="/contact"
			>
				{siteConfig.cta.business}
			</Button>
		</div>
		<div class="mt-12 text-sm opacity-75">
			<p class="zen-text">Launch celebration pricing • {siteConfig.company.targetAudience.join(' and ')} welcome</p>
		</div>
	</div>
</section>