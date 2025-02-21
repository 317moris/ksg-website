"use client";

import { useState, useEffect, useRef } from "react";
import {
	Bleed,
	EmptyState,
	Flex,
	Heading,
	Highlight,
	HStack,
	IconButton,
	Show,
	VStack,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight, FaXmark } from "react-icons/fa6";
import { ExistsImage } from "./fetch";
import { PaginationItems, PaginationRoot } from "../ui/pagination";
import { Switch } from "../ui/switch";

interface SwitchButtonsProps {
	imageExists: boolean;
	page: number;
	count: number;
	setPage: (page: number) => void;
}

function SwitchButtons({
	imageExists,
	page,
	setPage,
	count,
}: SwitchButtonsProps) {
	return (
		<>
			<Flex
				bgGradient="to-r"
				gradientFrom="bg"
				gradientTo="transparent"
				visibility={page > 1 ? "visible" : "hidden"}
				h="100%"
			>
				<IconButton
					px={4}
					variant="plain"
					borderWidth={0}
					bg="transparent"
					_hover={{ bg: "bg.subtle" }}
					onClick={() => setPage(page - 1)}
					h="100%"
				>
					<FaArrowLeft />
				</IconButton>
			</Flex>
			<Show
				when={imageExists}
				fallback={
					<Flex align="center">
						<EmptyState.Root>
							<EmptyState.Content>
								<EmptyState.Indicator>
									<FaXmark />
								</EmptyState.Indicator>
								<VStack textAlign="center">
									<EmptyState.Title>画像がありません</EmptyState.Title>
								</VStack>
							</EmptyState.Content>
						</EmptyState.Root>
					</Flex>
				}
			>
				<Heading
					size="4xl"
					textShadow="black 1px 0 16px"
					color="white"
					hideBelow="md"
				>
					<Highlight query="スペシャリスト" styles={{ color: "green.200" }}>スペシャリストを目指そう</Highlight>
				</Heading>
				<Heading
					size="4xl"
					textShadow="black 1px 0 16px"
					hideFrom="md"
					whiteSpace="pre-line"
				>
					<Highlight query="スペシャリスト" styles={{ color: "green.fg" }}>
						{"スペシャリストを\n目指そう"}
					</Highlight>
				</Heading>
			</Show>
			<Flex
				bgGradient="to-l"
				gradientFrom="bg"
				gradientTo="transparent"
				h="100%"
				visibility={page < count ? "visible" : "hidden"}
			>
				<IconButton
					h="100%"
					variant="plain"
					borderWidth={0}
					bg="transparent"
					_hover={{ bg: "bg.subtle" }}
					onClick={() => setPage(page + 1)}
				>
					<FaArrowRight />
				</IconButton>
			</Flex>
		</>
	);
}

export function KoshisoLifePictures() {
	const count = 13;
	const [page, setPage] = useState(1);
	const [imageExists, setImageExists] = useState(true);
	// const [autoMode, setAutoMode] = useState(true);
	const bgUrl = `https://ksg-h.spec.ed.jp/photo_albums/photo_album_photos/photo/426/5fdba2b918b8c04513cca51cc196c9f0/${count + 113 - (page - 1)}/big`;
	// async function checkImage() {
	// 	const exists = await ExistsImage(bgUrl);
	// 	console.log(exists);
	// 	setImageExists(exists);
	// }

	// // autoMode が true のときにのみページを自動更新する
	// useEffect(() => {
	// 	if (!autoMode) return; // autoMode が false のときは何もしない

	// 	const interval = setInterval(() => {
	// 		setPage((prev) => (prev < 13 ? prev + 1 : 1));
	// 	}, 5000);

	// 	return () => clearInterval(interval);
	// }, [autoMode]);

	return (
		<VStack>
			<Show
				when={imageExists}
				fallback={
					<Flex justify="space-between" w="100%" h="xs" borderRadius="md">
						<SwitchButtons
							imageExists={imageExists}
							page={page}
							setPage={setPage}
							count={count}
						/>
					</Flex>
				}
			>
				<Flex
					align="center"
					justify="space-between"
					bgImage={`url(${bgUrl})`}
					bgSize="cover"
					bgPos="center"
					w="100%"
					h="xs"
					borderRadius="md"
				>
					<SwitchButtons
						imageExists={imageExists}
						page={page}
						setPage={setPage}
						count={count}
					/>
				</Flex>
			</Show>
			{/* <Flex align="center" justify="space-between" w="100%"> */}
			{/* <Switch visibility="hidden">自動再生</Switch> */}
			<PaginationRoot
				page={page}
				count={count}
				pageSize={1}
				onPageChange={(e) => {
					setPage(e.page);
					// checkImage();
				}}
				variant="solid"
				maxW="100%"
				whiteSpace="pre-wrap"
				overflowX="auto"
			>
				<HStack>
					<PaginationItems />
				</HStack>
			</PaginationRoot>
			{/* <Switch
					checked={autoMode}
					onCheckedChange={(e) => setAutoMode(e.checked)}
				>
					自動再生
				</Switch> */}
			{/* </Flex> */}
		</VStack>
	);
}
