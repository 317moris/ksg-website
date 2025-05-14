import type { Post } from "@/interfaces/post";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import { cmsClient } from "./microcms";

export async function getAllPosts() {
	const posts: MicroCMSListResponse<Post> = await cmsClient.getList({
		endpoint: "news",
		queries: {
			fields: "id,title,subtitle",
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
	const post: Post = await cmsClient.getListDetail({
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
