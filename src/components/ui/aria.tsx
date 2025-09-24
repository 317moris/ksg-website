import { Box, BoxProps, HStack, Separator, Text } from "@chakra-ui/react";
import type { JSX } from "react";

export function Aria(
	props: BoxProps & {
		title: string;
		icon: JSX.Element;
		children: JSX.Element | JSX.Element[];
	},
) {
	const { title, icon, children, ...boxProps } = props;

	return (
		<Box spaceY="4" {...boxProps}>
			<HStack overflow="hidden">
				<HStack
					gap="3"
					mx="2"
					fontSize={["2xl", "3xl", "4xl"]}
					fontWeight="bolder"
				>
					{icon}
					<Text>{title}</Text>
				</HStack>
				<Separator variant="dashed" borderColor="border.emphasized" flex="1" />
			</HStack>
			{children}
		</Box>
	);
}
