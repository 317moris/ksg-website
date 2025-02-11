"use client";

import { IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useColorMode } from "../ui/color-mode";

export function ColorMode() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton variant="outline" onClick={toggleColorMode}>
			{colorMode === "light" ? <FaSun /> : <FaMoon />}
		</IconButton>
	);
}
