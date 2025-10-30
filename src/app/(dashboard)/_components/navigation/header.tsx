import { Box, Container } from "@chakra-ui/react";
import { HomeLink } from "@/components/homelink";

export function Header() {
	return (
		<Box
			as="header"
			pos="sticky"
			bg="bg"
			borderBottomWidth="1px"
			top="0"
			py="2"
		>
			<Container centerContent flexDir="row" justifyContent="space-between">
				<HomeLink hideText />
			</Container>
		</Box>
	);
}
