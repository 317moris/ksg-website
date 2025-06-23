import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import { FaNewspaper, FaPenNib, FaUserSlash } from "react-icons/fa6";
import { animation } from "@/animation";
import Posts from "@/components/posts";
import { Aria } from "@/components/ui/aria";
import { EmptyState } from "@/components/ui/empty-state";
import type { Params } from "@/interfaces/params";
import { getAuthor, getAuthorFilteredPosts } from "@/lib/api";

export default async function Page(props: Params) {
	const params = await props.params;
	const posts = await getAuthorFilteredPosts(params.slug);

	if (!posts.totalCount) {
		try {
			await getAuthor(params.slug);
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

export function generateStaticParams() {
	return [];
}
