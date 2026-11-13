<script lang="ts">
	import { ArrowUp } from 'phosphor-svelte';
	import { m } from '#lib/paraglide/messages.js';

	let y = $state(0);
	let vh = $state(0);
	const shown = $derived(vh > 0 && y > vh);

	function top() {
		const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
		window.scrollTo({ top: 0, behavior: still ? 'instant' : 'smooth' });
	}
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={vh} />

<!-- frame is planed in as you read (CSS scroll timeline); hidden until a screen down -->
<button
	type="button"
	class="to-top"
	class:to-top--shown={shown}
	aria-label={m.to_top()}
	tabindex={shown ? 0 : -1}
	aria-hidden={!shown}
	onclick={top}
>
	<svg class="to-top__frame" viewBox="0 0 40 40" aria-hidden="true">
		<rect x="0.5" y="0.5" width="39" height="39" pathLength="1" />
	</svg>
	<ArrowUp size={16} weight="regular" />
</button>
