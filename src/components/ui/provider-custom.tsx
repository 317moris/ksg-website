"use client";

import { ChakraProvider } from "@chakra-ui/react";
import {
	ColorModeProvider,
	type ColorModeProviderProps,
} from "./color-mode-custom";
import { system } from "@/theme";

export function Provider(props: ColorModeProviderProps) {
	return (
		<ChakraProvider value={system}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
}
