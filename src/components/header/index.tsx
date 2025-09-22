import {
	Box,
	Container,
	HStack,
	Image,
	Link,
	StackSeparator,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { HeaderDrawer } from "./drawer";
import { LinkTabs } from "./pages";
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
			<Container>
				<HStack justify="space-between" py={2}>
					<HeaderDrawer />
					<HStack hideBelow="lg" gap={4} separator={<StackSeparator />}>
						<Link asChild fontWeight="bold">
							<NextLink href="/">
								<Image asChild boxSize={9} rounded="full">
									<NextImage
										src="/icon/kosho.png"
										alt="校章"
										width={600}
										height={600}
									/>
								</Image>
								<Box hideBelow="xl">埼玉県立越谷総合技術高等学校</Box>
							</NextLink>
						</Link>
						<LinkTabs />
					</HStack>
					<Settings />
				</HStack>
			</Container>
		</Box>
	);
}
