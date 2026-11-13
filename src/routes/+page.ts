import { definePageMetaTags } from 'svelte-meta-tags';
import { getLocale } from '#lib/paraglide/runtime.js';
import { COPY } from './home.js';

// own title, else the base title (site.name) + template renders "Linkeun Mono • Linkeun Mono"; /id gets ID title + description
export const load = () => {
	const { title, description } = COPY[getLocale()];
	return definePageMetaTags({ title, description });
};
