import { definePageMetaTags } from 'svelte-meta-tags';

// own title, else the base title (site.name) + template renders "Linkeun Mono • Linkeun Mono"
export const load = () => definePageMetaTags({ title: 'Small tools for the web' });
