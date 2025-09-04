"use client";

import {
	Bleed,
	Box,
	Center,
	ClientOnly,
	HStack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { animation } from "@/animation";

function KiRura() {
	return (
		<Text
			whiteSpace="none"
			fontSize="16rem"
			userSelect="none"
			fontWeight="extrabold"
			letterSpacing={12}
			h="fit"
			lineHeight={0.95}
			color="bg.subtle"
		>
			KSG
		</Text>
	);
}

export function ZZZ() {
	const breakpoint = useBreakpointValue(["xs", "sm", "md"]);
	const kSGs = Array.from({
		length: breakpoint === "xs" ? 20 : breakpoint === "sm" ? 130 : 500,
	})
		.fill(0)
		.map(() => KiRura);
	const doubleKSGs = [];
	for (let i = 0; i < kSGs.length; i++) {
		doubleKSGs.push(kSGs.splice(i, 4));
	}

	const splitKSGs = [];
	for (let i = 0; i < doubleKSGs.length; i++) {
		splitKSGs.push(doubleKSGs.splice(i, 5));
	}

	return (
		<ClientOnly>
			<Center
				zIndex={0}
				pos="absolute"
				overflow="hidden"
				maxW="full"
				h="full"
				maxH="75rem"
				{...animation}
			>
				<Bleed
					pos="absolute"
					w="full"
					h="full"
					bgGradient="to-b"
					gradientFrom="transparent"
					gradientTo="bg"
					zIndex={1}
				/>
				<Box rotate={{ smDown: "-90deg", sm: "-45deg" }}>
					{splitKSGs.map((kSGs, i) => (
						<HStack key={Math.random()}>
							{kSGs.map((kSGs) => (
								<HStack
									key={Math.random()}
									animation={`slide-to-${i % 2 === 0 ? "left" : "right"}-full 180s linear infinite`}
								>
									{kSGs.map((KSG) => (
										<KSG key={Math.random()} />
									))}
								</HStack>
							))}
						</HStack>
					))}
				</Box>
			</Center>
		</ClientOnly>
	);
}
