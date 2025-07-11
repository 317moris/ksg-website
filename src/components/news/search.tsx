"use client";

import { Group, IconButton, Input } from "@chakra-ui/react";
import { type Dispatch, type SetStateAction, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export function Search({
	searchWord,
	setSearchWord,
}: {
	searchWord: string;
	setSearchWord: Dispatch<SetStateAction<string>>;
}) {
	const [currentSearchWord, setCurrentSearchWord] = useState("");
	const [searchTimeout, setSearchTimeoutId] = useState<NodeJS.Timeout>();

	return (
		<Group maxW="5xl" w="full" attached>
			<Input
				value={currentSearchWord}
				onChange={(e) => {
					setCurrentSearchWord(e.target.value);

					clearTimeout(searchTimeout);
					const searchTimeoutId = setTimeout(() => {
						// setSearchWord(currentSearchWord);
					}, 500);

					setSearchTimeoutId(searchTimeoutId);
				}}
				placeholder="検索(作り途中)"
			/>
			<IconButton variant="outline">
				<FaMagnifyingGlass />
			</IconButton>
		</Group>
	);
}
