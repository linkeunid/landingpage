<!-- linkeun.com motif: kumiko lattice in two corners, and the cursor lights the paper screen from behind. lkmn.link uses glow + hairlines instead. -->
<script lang="ts">
	import { useEventListener } from 'runed';

	let light: HTMLDivElement;
	let raf = 0;

	useEventListener(
		() => window,
		'pointermove',
		(e) => {
			if (e.pointerType !== 'mouse') return;
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				light.style.setProperty('--x', `${e.clientX}px`);
				light.style.setProperty('--y', `${e.clientY}px`);
				light.dataset.lit = '';
			});
		},
		{ passive: true }
	);

	$effect(() => () => cancelAnimationFrame(raf));
</script>

<div class="shoji" aria-hidden="true">
	<div class="shoji__lattice shoji__lattice--start"></div>
	<div class="shoji__lattice shoji__lattice--end"></div>
	<div class="shoji__light" bind:this={light}></div>
</div>
