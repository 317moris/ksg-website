"use client";

import { Group, IconButton, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export function SearchMenu() {
	const [searchText, setSearchText] = useState("");

	return (
		<Group maxW="5xl" w="full" attached>
			<Input
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				placeholder="検索(作り途中)"
			/>
			<IconButton variant="outline">
				<FaMagnifyingGlass />
			</IconButton>
		</Group>
	);
}
