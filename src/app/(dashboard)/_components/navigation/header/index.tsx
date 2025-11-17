import { Box, Container, HStack, StackSeparator } from "@chakra-ui/react";
import { HomeLink } from "@/components/homelink";
import { AccountButton } from "@/components/navigation/account";
import { PagesinNavigation } from "@/components/navigation/pages";
import { Settings } from "@/components/navigation/settings";
import { pages } from "../pages";

export function Header() {
	return (
		<Box
			borderBottomWidth={1}
			as="header"
			pos="sticky"
			zIndex="docked"
			top={0}
			bg="bg/84"
			backdropFilter="blur(20px)"
			hideBelow="sm"
		>
			<Container>
				<HStack py={2} justify="space-between" whiteSpace="nowrap">
					<HStack gap={4} separator={<StackSeparator />} overflow="hidden">
						<HomeLink />
						<HStack gap="6" overflowX="auto" scrollbarWidth="thin">
							<PagesinNavigation pages={pages} />
						</HStack>
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
