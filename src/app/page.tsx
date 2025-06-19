import {
	Code,
	Container,
	Flex,
	Heading,
	SimpleGrid,
	Spinner,
	Text,
} from "@chakra-ui/react";
import { Suspense } from "react";
import Posts from "@/components/posts";
import { TopImage } from "@/components/top-image";

export default function Home() {
	return (
		<Container as="main" maxW="8xl" py="2">
			<Flex
				my="4"
				direction={{ lgDown: "column", lg: "row" }}
				align="center"
				justify="space-between"
				w="full"
			>
				<Flex w={{ lg: "1/2" }} align="center" direction="column">
					<Heading>KSG</Heading>
					<Heading>埼玉県立越谷総合技術高等学校</Heading>
				</Flex>

				<Flex w={{ lg: "1/2" }} justify="center">
					<TopImage />
				</Flex>
			</Flex>
			<Text>hi</Text>
			<Heading>hi</Heading>
			<Code>consolelog</Code>

			<Heading>ニュース</Heading>
			<Suspense fallback={<Spinner />}>
				<SimpleGrid
					columns={{
						mdDown: 1,
						md: 2,
						lg: 3,
						xl: 4,
					}}
					gap={2}
					w="full"
				>
					<Posts />
				</SimpleGrid>
			</Suspense>
		</Container>
	);
}
