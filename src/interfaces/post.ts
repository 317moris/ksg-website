export type Post = {
	id: string;
	createdAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	content: string;
	category: {
		id: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		revisedAt: string;
		name: string;
	};
};

export type Posts = {
	contents: Post[];
	totalCount: number;
	offset: number;
	limit: number;
};
