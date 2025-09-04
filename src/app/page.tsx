import {
	Box,
	Button,
	Center,
	Container,
	Heading,
	Highlight,
	Image,
	SimpleGrid,
	VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaNewspaper } from "react-icons/fa6";
import LargePosts from "@/components/news/large-posts";
import { TopImage } from "@/components/top-image";
import { Aria } from "@/components/ui/aria";
import { getRecentPosts } from "@/lib/api";

export default async function Home() {
	const posts = await getRecentPosts();

	return (
		<Box pos="relative">
			<TopImage />
			<Container pb="8" spaceY="4" centerContent>
				<Center my="28" filter="drop-shadow(0px 0px 16px {colors.black/40})">
					<Image
						src="/icon/kosho.svg"
						mr={{ smDown: "-4", sm: "-8" }}
						w={{ smDown: "56", sm: "xs", mdToLg: "xs", xl: "sm" }}
						filter={{ _dark: "invert(100%)" }}
					/>
					<Heading
						ml={{ smDown: "-4", sm: "-8" }}
						whiteSpace="pre-wrap"
						size={{ smDown: "4xl", sm: "6xl" }}
						fontSize={{ smDown: "2xl", sm: "4xl" }}
						fontWeight="bolder"
					>
						<Highlight
							query={["越", "総", "技"]}
							styles={{
								color: "green.fg",
								fontSize: { smDown: "4xl", sm: "6xl" },
								fontWeight: "black",
							}}
						>
							{"越谷\n     総合\n          技術"}
						</Highlight>
					</Heading>
				</Center>
				<Aria title="ニュース" icon={<FaNewspaper />}>
					<VStack gap="4">
						<SimpleGrid
							columns={{
								mdDown: 1,
								md: 2,
							}}
							gap="2"
						>
							<LargePosts posts={posts} />
						</SimpleGrid>
						<Button variant="surface" asChild>
							<NextLink href="/news">全てのニュースを見る</NextLink>
						</Button>
					</VStack>
				</Aria>
				{/* <Aria title="学校情報(削除予定)"icon={<FaInfo />}>
				<SimpleGrid columns={{ lgDown: 1, lg: 2 }} w="full" gap="3">
					<Info />
				</SimpleGrid>
			</Aria> */}
			</Container>
		</Box>
	);
}
