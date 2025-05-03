"use server";

import type { Post, Posts } from "@/interfaces/post";
import { cmsClient } from "./microcms";

export async function getPostBySlug(slug: string) {
	const post: Post = await cmsClient.get({ endpoint: "news", contentId: slug });

	return post;
}

export async function getAllPosts() {
	const posts: Posts = await cmsClient.get({ endpoint: "news" });

	return posts;
}
