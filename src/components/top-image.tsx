"use client";

import {
	ButtonGroup,
	IconButton,
	Image,
	Pagination,
	Presence,
	VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const images = [
	{
		alt: "体育館",
		src: "https://ksg-h.spec.ed.jp/photo_albums/photo_album_photos/photo/426/5fdba2b918b8c04513cca51cc196c9f0/126/big",
	},
	{
		alt: "新幹線の模型",
		src: "https://ksg-h.spec.ed.jp/photo_albums/photo_album_photos/photo/426/5fdba2b918b8c04513cca51cc196c9f0/125/big",
	},
	{
		alt: "服デの発表",
		src: "https://ksg-h.spec.ed.jp/photo_albums/photo_album_photos/photo/426/5fdba2b918b8c04513cca51cc196c9f0/124/big",
	},
	{
		alt: "文化祭の準備？",
		src: "https://ksg-h.spec.ed.jp/photo_albums/photo_album_photos/photo/426/5fdba2b918b8c04513cca51cc196c9f0/123/big",
	},
	{
		alt: "鳥人間シミュレーター",
		src: "https://ksg-h.spec.ed.jp/photo_albums/photo_album_photos/photo/426/5fdba2b918b8c04513cca51cc196c9f0/121/big",
	},
	{
		alt: "校舎",
		src: "https://ksg-h.spec.ed.jp/photo_albums/photo_album_photos/photo/426/5fdba2b918b8c04513cca51cc196c9f0/120/big",
	},
	{
		alt: "食物調理科の実践授業",
		src: "https://ksg-h.spec.ed.jp/photo_albums/photo_album_photos/photo/426/5fdba2b918b8c04513cca51cc196c9f0/119/big",
	},
	{
		alt: "体育祭",
		src: "https://ksg-h.spec.ed.jp/photo_albums/photo_album_photos/photo/426/5fdba2b918b8c04513cca51cc196c9f0/118/big",
	},
	{
		alt: "あいさつ運動",
		src: "https://ksg-h.spec.ed.jp/photo_albums/photo_album_photos/photo/426/5fdba2b918b8c04513cca51cc196c9f0/117/big",
	},
	{
		alt: "入学式",
		src: "https://ksg-h.spec.ed.jp/photo_albums/photo_album_photos/photo/426/5fdba2b918b8c04513cca51cc196c9f0/116/big",
	},
];

export function TopImage() {
	const [imageIndex, setImageIndex] = useState(0);
	const [changedImage, setChangedImage] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			if (changedImage) {
				setChangedImage(false);
			} else {
				setImageIndex((i) => (i < images.length - 1 ? i + 1 : 0));
			}
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, [changedImage]);

	return (
		<VStack w="full">
			{images.map((image, i) => {
				const showing = i === imageIndex;

				return (
					<Presence
						key={image.src}
						present={showing}
						_open={{
							animation: "ease-in",
							animationDuration: "slowest",
							animationName: "fade-in",
						}}
						w="full"
					>
						<Image
							rounded="lg"
							h="sm"
							w="full"
							src={image.src}
							alt={image.alt}
						/>
					</Presence>
				);
			})}
			<Pagination.Root
				count={images.length}
				pageSize={1}
				page={imageIndex + 1}
				onPageChange={(e) => setImageIndex(e.page - 1)}
			>
				<ButtonGroup variant="ghost" size="sm">
					<Pagination.PrevTrigger asChild>
						<IconButton onClick={() => setChangedImage(true)}>
							<FaAngleLeft />
						</IconButton>
					</Pagination.PrevTrigger>
					<Pagination.PageText />
					<Pagination.NextTrigger asChild>
						<IconButton onClick={() => setChangedImage(true)}>
							<FaAngleRight />
						</IconButton>
					</Pagination.NextTrigger>
				</ButtonGroup>
			</Pagination.Root>
		</VStack>
	);
}
