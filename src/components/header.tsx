import { Box, Button, Container, Flex } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

export function Header() {
	return (
		<Box borderBottomWidth={1} as="header">
			<Container maxW="8xl">
				<Flex align="center" justify="space-between" py={2}>
					<Button variant="ghost">越総</Button>
					<ColorModeButton />
				</Flex>
			</Container>
		</Box>
	);
}
