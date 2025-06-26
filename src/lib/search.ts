"use server";

import type { Author } from "@/interfaces/author";
import { cmsClient } from "./microcms";
import type { Post } from "@/interfaces/post";

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
	const authorFilter = author ? `author[equals]${author}` : null;
	const searchWordFilter = searchWord ? `title[contains]${searchWord}` : null;

	const posts = await cmsClient.getList<Post>({
		endpoint: "news",
		queries: {
			fields: "id,title,subtitle,createdAt,author",
			filters: [authorFilter, searchWordFilter].join("[and]"),
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
