import { Box, ButtonGroup, Container, HStack } from "@chakra-ui/react";
import { AccountButton } from "@/components/navigation/account";
import { Settings } from "@/components/navigation/settings";
import { pages } from "../pages";
import { PagesDrawer } from "./drawer";

export function Footer() {
	return (
		<Box
			borderTopWidth={1}
			as="footer"
			pos="sticky"
			zIndex="docked"
			bottom={0}
			bg="bg"
			hideFrom="sm"
		>
			<Container>
				<HStack justify="space-between" py={2}>
					<PagesDrawer pages={pages} />
					<ButtonGroup>
						<AccountButton />
						<Settings />
					</ButtonGroup>
				</HStack>
			</Container>
		</Box>
	);
}
