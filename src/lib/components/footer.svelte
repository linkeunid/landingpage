<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { siteConfig } from '$lib/config/site';
	import { ExternalLink } from '@lucide/svelte';
</script>

<footer class="border-t mt-16">
	<div class="container mx-auto px-4 py-8">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<div>
				<h3 class="font-semibold mb-4">{siteConfig.siteName}</h3>
				<p class="text-sm text-muted-foreground">
					{siteConfig.siteDescription}
				</p>
			</div>
			<div>
				<h3 class="font-semibold mb-4">Company</h3>
				<ul class="space-y-2 text-sm">
					<li><a href="/about" class="text-muted-foreground hover:text-foreground">About Us</a></li>
					<li><a href="/contact" class="text-muted-foreground hover:text-foreground">Contact</a></li>
				</ul>
			</div>
			<div>
				<h3 class="font-semibold mb-4">Legal</h3>
				<ul class="space-y-2 text-sm">
					<li><a href="/terms" class="text-muted-foreground hover:text-foreground">Terms of Use</a></li>
					<li><a href="/privacy" class="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
				</ul>
			</div>
			<div>
				<h3 class="font-semibold mb-4">Connect</h3>
				<ul class="space-y-2 text-sm">
					<li><a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground inline-flex items-center">
						Instagram
						<ExternalLink class="w-3 h-3 ml-1" />
					</a></li>
					<li><a href={siteConfig.social.threads} target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground inline-flex items-center">
						Threads
						<ExternalLink class="w-3 h-3 ml-1" />
					</a></li>
					<li><a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground inline-flex items-center">
						GitHub
						<ExternalLink class="w-3 h-3 ml-1" />
					</a></li>
				</ul>
			</div>
		</div>
		<Separator class="my-8" />
		<div class="text-center text-sm text-muted-foreground">
			&copy; {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
		</div>
	</div>
</footer>