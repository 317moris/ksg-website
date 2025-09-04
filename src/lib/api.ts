import type { Post } from "@/interfaces/post";
import { cmsClient } from "./microcms";

export async function getList() {
	const posts = await cmsClient.getList<Post>({
		endpoint: "news",
		queries: {
			fields: "id,title,subtitle,createdAt,author,publishedAt",
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
			fields: "id,title,coverImage,subtitle,createdAt,author,publishedAt",
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

export async function getDetail(slug: string) {
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

export async function getListIds() {
	return await cmsClient.getAllContentIds({
		endpoint: "news",
	});
}
