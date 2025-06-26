"use client";

import { SimpleGrid, Spinner } from "@chakra-ui/react";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { FaNewspaper } from "react-icons/fa6";
import { animation } from "@/animation";
import { AuthorsMenu } from "@/components/authors";
import { Search } from "@/components/news/search";
import Posts from "@/components/posts";
import { Aria } from "@/components/ui/aria";
import { EmptyState } from "@/components/ui/empty-state";
import { MainContainer } from "@/components/ui/main-container";
import type { Post } from "@/interfaces/post";
import { getFilteredPosts } from "@/lib/search";

export default function Page() {
	const searchParams = useSearchParams();
	const [author, setAuthor] = useState<string[]>([
		searchParams.get("author") || "",
	]);
	const [searchWord, setSearchWord] = useState("");
	const [posts, setPosts] = useState<MicroCMSListResponse<Post>>();

	useEffect(() => {
		(async () => {
			const res = await getFilteredPosts(searchWord, author[0]);
			setPosts(res);
		})();
	}, [searchWord, author]);

	if (!posts) return null;

	return (
		<MainContainer>
			<AuthorsMenu author={author} setAuthor={setAuthor} />
			<Search searchWord={searchWord} setSearchWord={setSearchWord} />

			{posts.totalCount ? (
				<Aria title="ニュース" icon={<FaNewspaper />} {...animation}>
					<Suspense fallback={<Spinner />}>
						<SimpleGrid
							columns={{
								mdDown: 1,
								md: 2,
								lg: 3,
								xl: 4,
							}}
							gap="2"
							w="full"
						>
							<Posts posts={posts} />
						</SimpleGrid>
					</Suspense>
				</Aria>
			) : (
				<EmptyState title="何も無い" />
			)}
		</MainContainer>
	);
}
