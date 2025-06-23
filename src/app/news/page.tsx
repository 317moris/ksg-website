import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import { FaNewspaper } from "react-icons/fa6";
import Posts from "@/components/posts";
import { Aria } from "@/components/ui/aria";
import { MainContainer } from "@/components/ui/main-container";
import { getAllPosts } from "@/lib/api";

export default async function Page() {
	const posts = await getAllPosts();

	return (
		<MainContainer>
			<Aria title="ニュース" icon={<FaNewspaper />}>
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
		</MainContainer>
	);
}
