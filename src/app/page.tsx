import {
	Flex,
	Heading,
	Highlight,
	Image,
	SimpleGrid,
	Spinner,
} from "@chakra-ui/react";
import { Suspense } from "react";
import { FaNewspaper } from "react-icons/fa6";
import Posts from "@/components/posts";
import { TopImage } from "@/components/top-image";
import { Aria } from "@/components/ui/aria";
import { MainContainer } from "@/components/ui/main-container";

export default function Home() {
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
						<Posts />
					</SimpleGrid>
				</Suspense>
			</Aria>
		</MainContainer>
	);
}
