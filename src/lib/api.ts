import fs from "node:fs/promises";
import { join } from "node:path";
import type { Post } from "@/interfaces/post";
import matter from "gray-matter";

const newsDir = join(process.cwd(), "_news");

export async function getPostSlugs() {
	return await fs.readdir(newsDir);
}

export async function getPostBySlug(slug: string) {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(newsDir, `${realSlug}.md`);
	const { data, content } = matter(await fs.readFile(fullPath, "utf-8"));
	data.date = new Date(data.date);

	return {
		...data,
		slug: realSlug,
		content,
	} as Post;
}

export async function getAllPosts() {
	const slugs = await getPostSlugs();
	const posts = (
		await Promise.all(slugs.map((slug) => getPostBySlug(slug)))
	).sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

	return posts;
}
