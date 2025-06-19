import {
	Code,
	Container,
	Heading,
	SimpleGrid,
	Spinner,
	Text,
} from "@chakra-ui/react";
import { Suspense } from "react";
import Posts from "@/components/posts";

export default function Home() {
	return (
		<Container as="main" maxW="8xl">
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
