"use server";

import type { Post, Posts } from "@/interfaces/post";
import { cmsClient } from "./microcms";

export async function getPostBySlug(slug: string) {
	const post: Post = await cmsClient.get({
		endpoint: "news",
		customRequestInit: {
			next: {
				revalidate: 60,
			},
		},
		contentId: slug,
	});

	return post;
}

export async function getAllPosts() {
	const posts: Posts = await cmsClient.get({
		endpoint: "news",
		customRequestInit: {
			next: {
				revalidate: 60,
			},
		},
	});

	return posts;
}
