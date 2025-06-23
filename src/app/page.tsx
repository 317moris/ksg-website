import {
	Button,
	Flex,
	Heading,
	Highlight,
	Image,
	SimpleGrid,
	Spinner,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Suspense } from "react";
import { FaNewspaper, FaUpRightFromSquare } from "react-icons/fa6";
import Posts from "@/components/posts";
import { TopImage } from "@/components/top-image";
import { Aria } from "@/components/ui/aria";
import { MainContainer } from "@/components/ui/main-container";
import { getRecentPosts } from "@/lib/api";

export default async function Home() {
	const posts = await getRecentPosts();

	return (
		<MainContainer>
			<Flex
				my="4"
				direction={{ lgDown: "column", lg: "row" }}
				align="center"
				justify="space-between"
				w="full"
				gap="2"
			>
				<Flex w={{ lg: "1/2" }} align="center" justify="center">
					<Image
						fill="fg"
						src="/icon/kosho.svg"
						mr={{ smDown: "-4", sm: "-8" }}
						w={{ smDown: "56", sm: "xs", mdToLg: "xs", xl: "sm" }}
					/>
					<Heading
						ml={{ smDown: "-4", sm: "-8" }}
						whiteSpace="pre-wrap"
						size={{ smDown: "4xl", sm: "6xl" }}
						fontSize={{ smDown: "2xl", sm: "4xl" }}
					>
						<Highlight
							query={["越", "総", "技"]}
							styles={{
								color: "green.fg",
								fontSize: { smDown: "4xl", sm: "6xl" },
							}}
						>
							{"越谷\n     総合\n          技術"}
						</Highlight>
					</Heading>
				</Flex>
				<Flex hideBelow="lg" w="1/2" justify="center">
					<TopImage />
				</Flex>
			</Flex>
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
				<Button variant="surface" asChild>
					<NextLink href="/news">
						全てのニュースを見る <FaUpRightFromSquare />
					</NextLink>
				</Button>
			</Aria>
			{/* <Aria title="学校情報(削除予定)"icon={<FaInfo />}>
				<SimpleGrid columns={{ lgDown: 1, lg: 2 }} w="full" gap="3">
					<Info />
				</SimpleGrid>
			</Aria> */}
		</MainContainer>
	);
}
