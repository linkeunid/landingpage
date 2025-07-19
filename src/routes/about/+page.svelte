<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { siteConfig } from '$lib/config/site';
</script>

<svelte:head>
	<title>About Us - {siteConfig.siteName}</title>
	<meta
		name="description"
		content="Learn about {siteConfig.siteName}'s mission to provide the best software development services and digital solutions."
	/>
</svelte:head>

<section class="zen-spacing">
	<div class="zen-section text-center">
		<div class="mb-12">
			<Badge class="bg-primary/10 text-primary border-primary/20 mb-8 px-4 py-2 font-light">
				Our Story
			</Badge>
		</div>
		<h1 class="zen-text mx-auto mb-8 max-w-2xl text-3xl md:text-5xl">
			About <span class="text-primary">{siteConfig.siteName}</span>
		</h1>
		<p class="text-muted-foreground zen-text mx-auto mb-16 max-w-xl text-lg">
			Founded in {siteConfig.company.founded} in {siteConfig.company.location}, we're passionate
			about building useful platforms in the digital world.
		</p>
	</div>
</section>

<section class="zen-spacing">
	<div class="zen-section">
		<div class="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
			<div>
				<h2 class="mb-8 text-2xl">Our Mission</h2>
				{#each siteConfig.mission as mission}
					<p class="text-muted-foreground zen-text mb-6">
						{mission}
					</p>
				{/each}
				<p class="text-muted-foreground zen-text">
					Based on market research, many people complain about the excessive number of websites and
					software they use. {siteConfig.siteName} provides an all-in-one platform with single-factor
					authentication.
				</p>
			</div>
			<div class="zen-card p-12">
				<div class="grid grid-cols-2 gap-8">
					{#each Object.values(siteConfig.stats) as stat}
						<div class="text-center">
							<div class="text-primary mb-2 text-2xl font-light">{stat.value}</div>
							<p class="text-muted-foreground text-sm">{stat.label}</p>
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
			<h2 class="mb-4 text-2xl">Our Values</h2>
			<p class="text-muted-foreground zen-text mx-auto max-w-md">
				Principles that guide everything we do
			</p>
		</div>

		<div class="mx-auto grid max-w-3xl grid-cols-1 gap-12 md:grid-cols-2">
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
						<p class="text-muted-foreground zen-text text-sm">
							{value}
						</p>
					</CardContent>
				</Card>
			{/each}
		</div>

		<div class="mt-20">
			<p class="text-muted-foreground zen-text mx-auto max-w-lg">
				{siteConfig.brand.toneOfVoice}
			</p>
		</div>
	</div>
</section>

<section class="zen-spacing">
	<div class="zen-section text-center">
		<div class="mb-20">
			<h2 class="mb-4 text-2xl">Our Founder</h2>
			<p class="text-muted-foreground zen-text mx-auto max-w-md">
				Meet the passionate individual behind {siteConfig.siteName}
			</p>
		</div>

		<div class="mx-auto max-w-lg">
			<Card class="zen-card p-12 text-center">
				<CardContent class="p-0">
					<div
						class="bg-primary/10 mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full"
					>
						<span class="text-primary text-2xl font-light">HR</span>
					</div>
					<h3 class="mb-3 text-xl font-light">{siteConfig.founder.name}</h3>
					<p class="text-muted-foreground mb-6 text-sm">{siteConfig.founder.title}</p>
					<p class="text-muted-foreground zen-text mb-6 text-sm">
						Currently pursuing a bachelor's degree while building innovative SaaS solutions.
						Passionate about creating all-in-one platforms that help businesses and developers
						optimize their work.
					</p>
					<p class="text-muted-foreground zen-text text-xs">
						Founded {siteConfig.siteName} in {siteConfig.company.founded} with a vision to solve the
						problem of managing multiple platforms by providing unified access through single-factor
						authentication.
					</p>
				</CardContent>
			</Card>
		</div>

		<div class="mt-16">
			<p class="text-muted-foreground zen-text mb-4 text-sm">
				Based in {siteConfig.company.location}
			</p>
			<p class="text-muted-foreground zen-text text-sm italic">
				"We are a team that is always ready to help, learn, innovate, and grow"
			</p>
		</div>
	</div>
</section>

<section class="zen-spacing bg-primary text-primary-foreground">
	<div class="zen-section text-center">
		<h2 class="mb-8 text-3xl">Ready to Get Started?</h2>
		<p class="zen-text mx-auto mb-12 max-w-xl text-lg opacity-90">
			Join us in celebrating our production launch with special pricing.
		</p>
		<div class="flex flex-col items-center justify-center gap-6 sm:flex-row">
			<Button variant="secondary" size="lg" class="zen-button px-8 py-3" href="/apps">
				{siteConfig.cta.developers}
			</Button>
			<Button
				variant="outline"
				size="lg"
				class="zen-button text-foreground hover:bg-secondary hover:text-secondary-foreground px-8 py-3"
				href="/contact"
			>
				{siteConfig.cta.business}
			</Button>
		</div>
		<div class="mt-12 text-sm opacity-75">
			<p class="zen-text">
				Launch celebration pricing • {siteConfig.company.targetAudience.join(' and ')} welcome
			</p>
		</div>
	</div>
</section>
