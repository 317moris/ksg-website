import type { Post } from "@/interfaces/post";
import { cmsClient } from "./microcms";
import type { MicroCMSListResponse } from "microcms-js-sdk";

export async function getAllPosts() {
	const posts: MicroCMSListResponse<Post> = await cmsClient.getList({
		endpoint: "news",
		queries: {
			fields: "id,title,subtitle",
		},
	});

	return posts;
}

export async function getPostBySlug(slug: string) {
	const post: Post = await cmsClient.getListDetail({
		endpoint: "news",
		contentId: slug,
	});

	return post;
}
