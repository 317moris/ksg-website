"use client";

import { SimpleGrid, Spinner } from "@chakra-ui/react";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import {
	FaArrowPointer,
	FaNewspaper,
	FaPenNib,
	FaUserSlash,
} from "react-icons/fa6";
import { animation } from "@/animation";
import Posts from "@/components/posts";
import { Aria } from "@/components/ui/aria";
import { EmptyState } from "@/components/ui/empty-state";
import type { Post } from "@/interfaces/post";
import { getAuthor, getAuthorFilteredPosts } from "@/lib/api";

export default async function Page() {
	const [posts, setPosts] = useState<MicroCMSListResponse<Post>>();
	const searchParams = useSearchParams();
	const [author, _setAuthor] = useState(searchParams.get("author"));

	useEffect(() => {
		if (author) {
			(async () => {
				const res = await getAuthorFilteredPosts(author);
				setPosts(res);
			})();
		}
	}, [author]);

	if (!posts) return null;

	if (!author) return <EmptyState title="何もない" icon={<FaArrowPointer />} />;

	if (!posts.totalCount) {
		try {
			await getAuthor(author);
		} catch (_error) {
			return (
				<EmptyState
					title="作者が存在しません"
					icon={<FaUserSlash />}
					{...animation}
				/>
			);
		}
		return (
			<EmptyState
				title="まだニュースがありません"
				icon={<FaPenNib />}
				{...animation}
			/>
		);
	}

	return (
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
	);
}
