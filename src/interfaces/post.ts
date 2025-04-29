import type { Author } from "./author";

export type Post = {
	slug: string;
	title: string;
	description: string;
	date: Date;
	coverImage: string;
	author: Author;
	content: string;
};
