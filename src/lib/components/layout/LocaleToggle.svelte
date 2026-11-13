<script lang="ts">
	import { getLocale, setLocale } from '#lib/paraglide/runtime.js';
	import { m } from '#lib/paraglide/messages.js';
	import IconButton from '#lib/components/ui/IconButton.svelte';
</script>

<!-- setLocale writes the cookie and reloads, so server-rendered copy follows -->
<IconButton
	onclick={() => setLocale(getLocale() === 'id' ? 'en' : 'id')}
	class="locale-toggle"
	aria-label={m.locale_toggle()}
>
	{m.locale_toggle_label()}
</IconButton>
