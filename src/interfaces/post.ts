export type CoverImage = {
	url: string;
	width: number;
	height: number;
};

export type Post = {
	coverImage?: CoverImage;
	title: string;
	subtitle?: string;
	content: string;
};
