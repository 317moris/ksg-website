import type { CustomRequestInit } from "microcms-js-sdk";
import type { Post, RecentPost } from "@/interfaces/post";
import { cmsClient } from "./microcms";

const customRequestInit: CustomRequestInit = {
	next: {
		revalidate: 60,
	},
};

export async function getList() {
	const posts = await cmsClient.getList<Post>({
		endpoint: "news",
		queries: {
			fields:
				"id,title,subtitle,createdAt,author,coverImage,tag,publishedAt,content",
		},
		customRequestInit,
	});

	return posts;
}

export async function getRecentPosts() {
	const posts = await cmsClient.getList<RecentPost>({
		endpoint: "news",
		queries: {
			fields: "id,title,coverImage,subtitle,createdAt,author,tag,publishedAt",
			limit: 8,
		},
		customRequestInit,
	});

	return posts;
}

export async function getPreviousPost(publishDate: string) {
	return await getOnePost(publishDate, "previous");
}

export async function getNextPost(publishDate: string) {
	return await getOnePost(publishDate, "next");
}

async function getOnePost(publishDate: string, mode: "next" | "previous") {
	return await cmsClient.getList<RecentPost>({
		endpoint: "news",
		queries: {
			fields: "id,title,coverImage,subtitle,createdAt,author,tag,publishedAt",
			limit: 1,
			filters: `publishedAt[${mode === "next" ? "greater_than" : "less_than"}]${publishDate}`,
			orders: `${mode === "next" ? "" : "-"}publishedAt`,
		},
	});
}

export async function getDetail(slug: string) {
	const post = await cmsClient.getListDetail<Post>({
		endpoint: "news",
		contentId: slug,
		customRequestInit,
	});

	return post;
}

export async function getListIds() {
	return await cmsClient.getAllContentIds({
		endpoint: "news",
	});
}
