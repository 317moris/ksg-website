import type { Post } from "@/interfaces/post";
import { cmsClient } from "./microcms";

export async function getAllPosts() {
	const posts = await cmsClient.getList<Post>({
		endpoint: "news",
		queries: {
			fields: "id,title,subtitle,createdAt,author,coverImage",
		},
		customRequestInit: {
			next: {
				revalidate: 60,
			},
		},
	});

	return posts;
}

export async function getRecentPosts() {
	const posts = await cmsClient.getList<Post>({
		endpoint: "news",
		queries: {
			fields: "id,title,subtitle,createdAt,author",
			limit: 8,
		},
		customRequestInit: {
			next: {
				revalidate: 60,
			},
		},
	});

	return posts;
}

export async function getPostBySlug(slug: string) {
	const post = await cmsClient.getListDetail<Post>({
		endpoint: "news",
		contentId: slug,
		customRequestInit: {
			next: {
				revalidate: 60,
			},
		},
	});

	return post;
}
