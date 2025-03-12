import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

const blog = defineCollection({
	loader: glob({
		pattern: 'posts/*.md',
	}),
});

export const collections = { blog };
