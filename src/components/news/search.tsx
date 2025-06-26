"use client";

import {
	Group,
	IconButton,
	Input,
	SimpleGrid,
	Spinner,
} from "@chakra-ui/react";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react";
import {
	FaArrowPointer,
	FaMagnifyingGlass,
	FaNewspaper,
	FaPenNib,
	FaUserSlash,
} from "react-icons/fa6";
import { animation } from "@/animation";
import Posts from "@/components/posts";
import { Aria } from "@/components/ui/aria";
import { EmptyState } from "@/components/ui/empty-state";
import type { Post } from "@/interfaces/post";
import { getAuthor } from "@/lib/search";

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
