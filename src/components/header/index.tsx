import {
	Box,
	ClientOnly,
	Container,
	Flex,
	Group,
	HStack,
	Image,
	Link,
	StackSeparator,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { HeaderDrawer } from "./drawer";
import { Pages } from "./pages";
import { Settings } from "./settings";

export function Header() {
	return (
		<Box
			borderBottomWidth={1}
			as="header"
			pos="sticky"
			zIndex="docked"
			top={0}
			bg="bg"
		>
			<Container maxW="8xl">
				<Flex align="center" justify="space-between" py={2}>
					<HeaderDrawer />
					<HStack hideBelow="lg" gap={4} separator={<StackSeparator />}>
						<Link asChild fontWeight="bold">
							<NextLink href="/">
								<HStack>
									<Image asChild boxSize={9} rounded="full">
										<NextImage
											src="/icon/kosho.png"
											alt="校章"
											width={600}
											height={600}
										/>
									</Image>
									<Box hideBelow="xl">埼玉県立越谷総合技術高等学校</Box>
								</HStack>
							</NextLink>
						</Link>
						<Group>
							<Pages drawer={false} />
						</Group>
					</HStack>
					<ClientOnly fallback={<Skeleton boxSize="10" />}>
						<Settings />
					</ClientOnly>
				</Flex>
			</Container>
		</Box>
	);
}
