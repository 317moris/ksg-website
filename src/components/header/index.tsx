import { ColorModeButton } from "@/components/ui/color-mode";
import { Skeleton } from "@/components/ui/skeleton";
import {
	Box,
	ClientOnly,
	Container,
	Flex,
	HStack,
	Image,
	Link,
	StackSeparator,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { HeaderDrawer } from "./drawer";
import { Pages } from "./pages";

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
					<ClientOnly fallback={<Skeleton boxSize="10" />}>
						<HeaderDrawer />
					</ClientOnly>
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
						<ClientOnly fallback={<Skeleton w="md" h={10} />}>
							<HStack>
								<Pages drawer={false} />
							</HStack>
						</ClientOnly>
					</HStack>
					<ColorModeButton />
				</Flex>
			</Container>
		</Box>
	);
}
