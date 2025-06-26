"use client";

import { Group, IconButton, Input } from "@chakra-ui/react";
import type { Dispatch, SetStateAction } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export async function Search({
	searchWord,
	setSearchWord,
}: {
	searchWord: string;
	setSearchWord: Dispatch<SetStateAction<string>>;
}) {
	return (
		<Group maxW="5xl" w="full" attached>
			<Input
				value={searchWord}
				onChange={(e) => setSearchWord(e.target.value)}
				placeholder="検索(作り途中)"
			/>
			<IconButton variant="outline">
				<FaMagnifyingGlass />
			</IconButton>
		</Group>
	);
}
