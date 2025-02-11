import { Box, Flex, Heading, Separator } from "@chakra-ui/react";
import type React from "react";

export function Aria(props: { heading: string; children: React.ReactNode }) {
	return (
		<Flex gap={2} direction="column" w="100%">
			<Heading size="3xl">{props.heading}</Heading>
			<Separator />
			{props.children}
		</Flex>
	);
}
