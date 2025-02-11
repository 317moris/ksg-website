import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	HStack,
	Link,
	VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Links } from "./links";
import type React from "react";
import { ColorMode } from "./color_mode";

export default function Header() {
	return (
		<Box
			as="header"
			pos="sticky"
			top={0}
			zIndex="docked"
			w="100%"
			bg="bg"
			borderBottomWidth={1}
		>
			<Container maxW="8xl" py={2}>
				<Flex align="center" justify="space-between">
					<Heading asChild>
						<Link asChild>
							<NextLink href="/">埼玉県立越谷総合技術高等学校</NextLink>
						</Link>
					</Heading>
					<HStack>
						<ColorMode />
						<Button variant="outline">ログイン</Button>
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
}
