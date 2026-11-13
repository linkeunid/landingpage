<script lang="ts">
	// four kumiko-straight joints: a series in the middle, linked out to three neighbours
	let { labels, title }: { labels: string[]; title: string } = $props();

	const at = [
		[24, 48],
		[132, 16],
		[132, 80],
		[236, 48]
	] as const;
	const edges = [
		[0, 1],
		[0, 2],
		[1, 3],
		[2, 3]
	] as const;
</script>

<svg class="newda-map" viewBox="0 0 260 96" role="img" aria-label={title}>
	{#each edges as [a, b] (`${a}-${b}`)}
		<line class="newda-map__edge" x1={at[a][0]} y1={at[a][1]} x2={at[b][0]} y2={at[b][1]} />
	{/each}
	{#each labels as label, i (label)}
		<rect class="newda-map__node" x={at[i][0] - 4} y={at[i][1] - 4} width="8" height="8" />
		<text class="newda-map__label" x={at[i][0]} y={at[i][1] + (i === 1 ? -10 : 18)}>{label}</text>
	{/each}
</svg>
