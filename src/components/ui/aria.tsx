import { Box, BoxProps, HStack, Link, Separator, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import type { JSX } from "react";

export function Aria(
	props: BoxProps & {
		title: string;
		icon?: JSX.Element;
		url?: string;
		children: JSX.Element | JSX.Element[];
	},
) {
	const { title, icon, url, children, ...boxProps } = props;

	return (
		<Box
			spaceY="4"
			p="4"
			bg="bg"
			rounded="2xl"
			borderWidth="1px"
			borderColor="green.fg/18"
			{...boxProps}
		>
			<HStack overflow="hidden">
				<HStack
					gap="3"
					mx="2"
					fontSize={["2xl", "3xl", "4xl"]}
					fontWeight="bolder"
				>
					{icon}
					{url ? (
						<Link scrollMarginTop="12px" asChild>
							<NextLink href={url}>{title}</NextLink>
						</Link>
					) : (
						<Text>{title}</Text>
					)}
				</HStack>
				<Separator variant="dashed" borderColor="border.emphasized" flex="1" />
			</HStack>
			{children}
		</Box>
	);
}
