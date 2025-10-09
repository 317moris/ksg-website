import { Box, Container, HStack } from "@chakra-ui/react";
import { Settings } from "../settings";
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
					<PagesDrawer />
					<Settings />
				</HStack>
			</Container>
		</Box>
	);
}
