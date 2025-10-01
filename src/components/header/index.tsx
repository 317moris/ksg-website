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
import { AccountButton } from "./account";
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
			hideBelow="md"
		>
			<Container>
				<HStack py={2} justify="space-between">
					<HStack gap={4} separator={<StackSeparator />}>
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
								<Box hideBelow="lg">埼玉県立越谷総合技術高等学校</Box>
							</NextLink>
						</Link>
						<LinkTabs />
					</HStack>
					<HStack>
						<AccountButton />
						<Settings />
					</HStack>
				</HStack>
			</Container>
		</Box>
	);
}
