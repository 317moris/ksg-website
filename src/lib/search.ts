"use server";

import type { Author } from "@/interfaces/author";
import type { Post } from "@/interfaces/post";
import { cmsClient } from "./microcms";

export async function getAuthor(slug: string) {
	const posts = await cmsClient.getListDetail<Author>({
		endpoint: "authors",
		contentId: slug,
		customRequestInit: {
			next: {
				revalidate: 60,
			},
		},
	});

	return posts;
}

export async function getFilteredPosts(searchWord: string, author: string) {
	const authorFilter = author ? `author[equals]${author}` : undefined;
	const searchWordFilter = searchWord
		? `title[contains]${searchWord}`
		: undefined;

	let filters: string | undefined = [authorFilter, searchWordFilter]
		.filter((f) => f)
		.join("[and]");
	if (filters === "[and]") filters = undefined;

	console.log(filters);

	const posts = await cmsClient.getList<Post>({
		endpoint: "news",
		queries: {
			fields: "id,title,subtitle,createdAt,author",
			filters,
		},
		customRequestInit: {
			next: {
				revalidate: 60,
			},
		},
	});

	return posts;
}

export async function getAuthors() {
	const posts = await cmsClient.getList<Author>({
		endpoint: "authors",
		queries: {
			fields: "id,name,icon",
		},
		customRequestInit: {
			next: {
				revalidate: 60,
			},
		},
	});

	return posts;
}
