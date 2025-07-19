<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import Navigation from '$lib/components/navigation.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	
	let { children } = $props();
</script>

<ModeWatcher />
<div class="min-h-screen bg-background">
	<Navigation />
	
	<main>
		{@render children()}
	</main>
	
	<Footer />
</div>
<Toaster />