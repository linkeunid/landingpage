<script lang="ts">
	import { Sun, Moon } from 'phosphor-svelte';
	import { toggleMode, mode } from 'mode-watcher';
	import IconButton from '#lib/components/ui/IconButton.svelte';
</script>

<IconButton onclick={toggleMode} class="theme-toggle" aria-label="Toggle theme">
	{#if mode.current === 'dark'}
		<Sun size={18} weight="regular" />
	{:else}
		<Moon size={18} weight="regular" />
	{/if}
</IconButton>
