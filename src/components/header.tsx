import {
	Box,
	ClientOnly,
	Container,
	Flex,
	HStack,
	IconButton,
	Image,
	Link,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { FaList } from "react-icons/fa6";
import { Pages } from "./pages";
import { ColorModeButton } from "./ui/color-mode";
import { Skeleton } from "./ui/skeleton";

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
					<IconButton variant="ghost" hideFrom="md">
						<FaList />
					</IconButton>
					<HStack hideBelow="md" gap={4}>
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
									<Box hideBelow="lg">埼玉県立越谷総合技術高等学校</Box>
								</HStack>
							</NextLink>
						</Link>
						<ClientOnly fallback={<Skeleton w="md" h={10} />}>
							<HStack>
								<Pages />
							</HStack>
						</ClientOnly>
					</HStack>
					<ColorModeButton />
				</Flex>
			</Container>
		</Box>
	);
}
