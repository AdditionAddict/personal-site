type ViteMarkdownGlobValues = {
	url: string;
	rawContent: () => string;
};

type Post = {
	url: string;
	heading: string;
};

function getTitleFromRawContent(content: string) {
	const firstLine = content.split('\n')[0];
	return firstLine.split('# ')[1];
}

export function getAllPosts(): Post[] {
	const allPosts = Object.values(
		import.meta.glob('./pages/posts/*.md', { eager: true }),
	) as ViteMarkdownGlobValues[];

	return allPosts.map((p) => ({
		url: p.url,
		heading: getTitleFromRawContent(p.rawContent()),
	}));
}
