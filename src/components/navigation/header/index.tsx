import { Box, Container, HStack, StackSeparator } from "@chakra-ui/react";
import { HomeLink } from "@/components/homelink";
import { AccountButton } from "../account";
import { PagesinHeader } from "../pages";
import { pages } from "../pages-data";
import { Settings } from "../settings";

export function Header() {
	return (
		<Box
			borderBottomWidth={1}
			as="header"
			pos="sticky"
			zIndex="docked"
			top={0}
			bg="bg"
			hideBelow="sm"
		>
			<Container>
				<HStack py={2} justify="space-between" whiteSpace="nowrap">
					<HStack gap={4} separator={<StackSeparator />} overflow="hidden">
						<HomeLink />
						<HStack gap="6" overflowX="auto" scrollbarWidth="thin">
							<PagesinHeader pages={pages} />
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
