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

export function Header() {
	const kosho = (
		<Image asChild boxSize={9} rounded="full">
			<NextImage src="/icon/kosho.png" alt="校章" width={600} height={600} />
		</Image>
	);

	const home = (
		<Link asChild fontWeight="bold">
			<NextLink href="/">
				<HStack>
					{kosho}
					<Box hideBelow="lg">埼玉県立越谷総合技術高等学校</Box>
				</HStack>
			</NextLink>
		</Link>
	);

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
					<Box hideFrom="md">{home}</Box>
					<HStack hideBelow="md" gap={4}>
						{home}
						<ClientOnly>
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
