import { Box, ButtonGroup, Container, HStack } from "@chakra-ui/react";
import { Settings } from "../settings";
import { PagesDrawer } from "./drawer";
import { AccountButton } from "../account";

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
					<PagesDrawer />
					<ButtonGroup>
						<AccountButton />
						<Settings />
					</ButtonGroup>
				</HStack>
			</Container>
		</Box>
	);
}
