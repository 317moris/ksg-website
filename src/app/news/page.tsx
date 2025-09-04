import { Container, SimpleGrid } from "@chakra-ui/react";
import { FaNewspaper } from "react-icons/fa6";
import { animation } from "@/animation";
import Posts from "@/components/news/posts";
import { Aria } from "@/components/ui/aria";
import { EmptyState } from "@/components/ui/empty-state";
import { getList } from "@/lib/api";

export default async function Page() {
	const posts = await getList();

	return (
		<Container py="4">
			{posts.totalCount ? (
				<Aria title="ニュース" icon={<FaNewspaper />} {...animation}>
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
				</Aria>
			) : (
				<EmptyState title="何も無い" />
			)}
		</Container>
	);
}
