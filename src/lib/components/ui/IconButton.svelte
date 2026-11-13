<script lang="ts">
	import { IconButton as AlusIconButton } from 'alus-ui';
	import type { ComponentProps } from 'svelte';

	let { children, ...rest }: ComponentProps<typeof AlusIconButton> = $props();
</script>

<AlusIconButton {...rest}>
	{#if children}
		{@render children()}
	{/if}
</AlusIconButton>
