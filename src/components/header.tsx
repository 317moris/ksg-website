import {
	Box,
	Button,
	Container,
	Flex,
	HStack,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode-custom";
import NextImage from "next/image";
import { Pages } from "./pages";

export function Header() {
	return (
		<Box borderBottomWidth={1} as="header">
			<Container maxW="8xl">
				<Flex align="center" justify="space-between" py={2}>
					<HStack>
						<Link asChild fontWeight="bold">
							<HStack>
								<Image asChild boxSize={6} rounded="full">
									<NextImage
										src="/icon/kosho.png"
										alt="校章"
										width={80}
										height={80}
									/>
								</Image>
								越谷総合技術高校
							</HStack>
						</Link>
						<Pages />
					</HStack>

					<ColorModeButton />
				</Flex>
			</Container>
		</Box>
	);
}
