"use client";

import { ClientOnly, SimpleGrid, Spinner } from "@chakra-ui/react";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import { useRouter, useSearchParams } from "next/navigation";
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
import Loading from "../loading";

export default function Page() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [author, setAuthor] = useState<string | null>(null);
	const [searchWord, setSearchWord] = useState<string | null>(null);
	const [posts, setPosts] = useState<MicroCMSListResponse<Post>>();

	const [params] = useState([
		{
			name: "author",
			value: author,
			set: setAuthor,
		},
		{
			name: "searchWord",
			value: searchWord,
			set: setSearchWord,
		},
	]);

	useEffect(() => {
		for (const param of params) {
			const query = searchParams.get(param.name);
			param.set(query);
		}
		const paramValues = params
			.map((param) => param.value)
			.filter((param) => param);
		console.log(paramValues);
		router.push(
			`/news${paramValues.length ? `?${paramValues.join("&")}` : ""}`,
		);
	}, [searchParams, params, router]);

	useEffect(() => {
		(async () => {
			const res = await getFilteredPosts(searchWord, author);
			setPosts(res);
		})();
	}, [searchWord, author]);

	if (!posts) return null;

	return (
		<ClientOnly fallback={<Loading />}>
			<MainContainer>
				<AuthorsMenu author={author} setAuthor={setAuthor} />
				<Search setSearchWord={setSearchWord} />

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
		</ClientOnly>
	);
}
