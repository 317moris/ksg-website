import { Box, Container, HStack } from "@chakra-ui/react";
import { HeaderDrawer } from "../header/drawer";
import { Settings } from "../header/settings";

export function Footer() {
	return (
		<Box
			borderTopWidth={1}
			as="footer"
			pos="sticky"
			zIndex="docked"
			bottom={0}
			bg="bg"
			hideFrom="md"
		>
			<Container>
				<HStack justify="space-between" py={2}>
					<HeaderDrawer />
					<Settings />
				</HStack>
			</Container>
		</Box>
	);
}
