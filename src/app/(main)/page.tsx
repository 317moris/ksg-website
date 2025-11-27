import {
	Box,
	Button,
	Center,
	Container,
	Heading,
	Highlight,
	IconButton,
	Image,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
	FaAnglesDown,
	FaHashtag,
	FaLocationPin,
	FaNewspaper,
	FaRoad,
} from "react-icons/fa6";
import { Courses } from "@/components/courses";
import { Links } from "@/components/links";
import LargePosts from "@/components/news/large-posts";
import { TopImage } from "@/components/top-image";
import { Aria } from "@/components/ui/aria";
import { getRecentPosts } from "@/lib/api";

export default async function Home() {
	const posts = await getRecentPosts();

	return (
		<>
			<TopImage />
			<Container pb="16" spaceY="8">
				<Center
					flexDir="column"
					py="4"
					minH={{ "2xlDown": "vh", "2xl": "54rem" }}
					filter="drop-shadow(0px 0px 16px {colors.bg/40})"
					gap="8"
				>
					<Center>
						<Image
							src="/icon/kosho.svg"
							fetchPriority="high"
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
					<IconButton size="2xl" variant="ghost" color="fg.subtle" asChild>
						<NextLink href="#news">
							<FaAnglesDown />
						</NextLink>
					</IconButton>
				</Center>
				<Aria title="ニュース" icon={<FaNewspaper />} url="#news" top={0}>
					<VStack gap="4">
						<SimpleGrid
							w="full"
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
				<Aria title="公式SNS" icon={<FaHashtag />}>
					<SimpleGrid columns={{ mdDown: 1, md: 2 }} gap="2">
						<Links />
					</SimpleGrid>
				</Aria>
				<Aria title="学科" icon={<FaRoad />}>
					<SimpleGrid
						columns={{
							lgDown: 1,
							lg: 2,
						}}
						w="full"
						gap="4"
					>
						<Courses />
					</SimpleGrid>
				</Aria>
				<Aria title="アクセス" icon={<FaLocationPin />} url="#access">
					<VStack>
						<Text>
							埼玉県立越谷総合技術高等学校
							<br />
							〒343-0856 埼玉県越谷市谷中町3-100-1
							<br />
							<br />
							東武スカイツリーライン越谷駅西口よりタローズバスで約１０分（本校前下車）
						</Text>
					</VStack>
					<Box asChild w="full" h="md" overflow="hidden" rounded="lg">
						<iframe
							title="Googleマップ"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933.6883520590671!2d139.76892891571194!3d35.884160947954214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601895d935e5258d%3A0x64572972e210cc28!2z5Z-8546J55yM56uL6LaK6LC357eP5ZCI5oqA6KGT6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1758768811091!5m2!1sja!2sjp"
							loading="lazy"
						/>
					</Box>
				</Aria>
			</Container>
		</>
	);
}
