"use client";

import { Image, Presence } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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

	useEffect(() => {
		const interval = setInterval(() => {
			setImageIndex((i) => (i < images.length - 1 ? i + 1 : 0));
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return images.map((image, i) => {
		return (
			<Presence
				key={image.src}
				present={i === imageIndex}
				_open={{
					animation: "ease-in",
					animationDuration: "slowest",
					animationName: "fade-in",
				}}
				w="full"
				// _closed={{
				//    animation: "ease-in",
				// animationDuration: "slowest",
				// animationName: "fade-out"
				//    }}
			>
				<Image rounded="lg" h="sm" w="full" src={image.src} alt={image.alt} />
			</Presence>
		);
	});
}
