<script lang="ts">
	import '../app.css';
	import AppContainer from '$lib/components/app-container.svelte';
	
	let { children } = $props();
</script>

<AppContainer>
	{@render children()}
</AppContainer>
