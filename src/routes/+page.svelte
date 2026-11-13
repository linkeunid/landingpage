<script lang="ts">
	import { page } from '$app/state';
	import { JsonLd } from 'svelte-meta-tags';
	import { getLocale } from '#lib/paraglide/runtime.js';
	import { jsonLd, site } from '#lib/data/site.js';
	import Footer from '#lib/components/layout/Footer.svelte';
	import NewdaMap from './NewdaMap.svelte';
	import { COPY, LINKS } from './home.js';

	const t = $derived(COPY[getLocale()]);
	const SOCIAL: Record<string, string> = {
		github: 'GitHub',
		instagram: 'Instagram',
		threads: 'Threads'
	};
	const socials = site.sameAs.map((href) => ({
		href,
		label: SOCIAL[new URL(href).hostname.split('.').at(-2) ?? ''] ?? href
	}));
</script>

<JsonLd schema={jsonLd(page.url.origin)} />

<div class="page">
	<main class="home-page">
		<div class="home-page__head">
			<h1 class="home-page__title">{site.name}</h1>
			<div class="home-page__rule"></div>
			<p class="home-page__lede">{t.lede}</p>
		</div>

		<section class="home-page__section" aria-labelledby="work">
			<h2 id="work" class="home-page__heading">{t.products}</h2>
			<ul class="home-page__pieces">
				<li class="home-page__piece">
					<a class="home-page__piece-name" href={LINKS.lkmn} rel="external">lkmn.link</a>
					<div class="home-page__piece-body">
						<p class="home-page__piece-what">{t.lkmn.what}</p>
						<p class="home-page__slip" aria-label={t.lkmn.example}>
							<span class="home-page__slip-short">{LINKS.example.short}</span>
							<span class="home-page__slip-long">{LINKS.example.long}</span>
						</p>
						<a class="home-page__act" href={LINKS.lkmn} rel="external">{t.lkmn.act}</a>
					</div>
					<span class="home-page__piece-state">{t.lkmn.state}</span>
				</li>
				<li class="home-page__piece">
					<a class="home-page__piece-name" href={LINKS.newda} rel="external">Newda</a>
					<div class="home-page__piece-body">
						<p class="home-page__piece-what">{t.newda.what}</p>
						<NewdaMap labels={t.newda.nodes} title={t.newda.example} />
						<a class="home-page__act" href={LINKS.waitlist} rel="external">{t.newda.act}</a>
					</div>
					<span class="home-page__piece-state">{t.newda.state}</span>
				</li>
			</ul>
		</section>

		<section id="about" class="home-page__section" aria-labelledby="about-h">
			<h2 id="about-h" class="home-page__heading">{t.about}</h2>
			<div>
				<p class="home-page__prose">{t.prose}</p>
				<dl class="home-page__values">
					{#each t.values as v (v.h)}
						<dt class="home-page__value-name">{v.h}</dt>
						<dd class="home-page__value-what">
							{v.p}
							{#if v.proof}
								<a class="home-page__proof" href={v.proof.href} rel="external">{v.proof.label}</a>
							{/if}
						</dd>
					{/each}
				</dl>
			</div>
		</section>

		<section id="contact" class="home-page__section" aria-labelledby="contact-h">
			<h2 id="contact-h" class="home-page__heading">{t.contact}</h2>
			<div>
				<p class="home-page__prose">{t.contactLede}</p>
				<a class="home-page__email" href="mailto:{site.email}">{site.email}</a>
				<ul class="home-page__socials">
					{#each socials as s (s.href)}
						<li><a class="home-page__proof" href={s.href} rel="external me">{s.label}</a></li>
					{/each}
				</ul>
			</div>
		</section>
	</main>
	<Footer note="each piece cut to fit" />
</div>
