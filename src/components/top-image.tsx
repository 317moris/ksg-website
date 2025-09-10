"use client";

import { Bleed, Center, Heading, Presence } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const images = [
	{
		alt: "就職指導\n就職活動",
		src: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/1/12606/big",
	},
	{
		alt: "面接練習",
		src: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/1/12559/big",
	},
	{
		alt: "中間考査",
		src: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/1/12419/big",
	},
	{
		alt: "食物調理科\nパン作り",
		src: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/1/12531/big",
	},
	{
		alt: "卒業生による\n進路説明会",
		src: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/1/12449/big",
	},
	{
		alt: "服飾デザイン科\n外部講師による授業",
		src: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/1/12448/big",
	},
	{
		alt: "1年生\n遠足",
		src: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/1/12424/big",
	},
	{
		alt: "校舎",
		src: "https://ksg-h.spec.ed.jp/photo_albums/photo_album_photos/photo/426/5fdba2b918b8c04513cca51cc196c9f0/120/big",
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
		<Center
			zIndex={0}
			pos="absolute"
			overflow="hidden"
			w="vw"
			h="40rem"
			userSelect="none"
		>
			{images.map((image, i) => {
				const showing = i === imageIndex;

				return (
					<Presence
						pos="absolute"
						key={image.src}
						present={showing}
						_open={{
							animation: "ease-out",
							animationDuration: "slowest",
							animationName: "fade-in",
						}}
						_closed={{
							animation: "ease-out",
							animationDuration: "slowest",
							animationName: "fade-out",
						}}
						bgImage={`url(${image.src})`}
						bgPos="center"
						bgSize="cover"
						w="full"
						h="full"
					/>
				);
			})}
			<Bleed
				pos="absolute"
				w="full"
				h="full"
				bgGradient="to-b"
				gradientFrom="bg/50"
				gradientTo="bg"
			/>
			{images.map((image, i) => {
				const showing = i === imageIndex;

				return (
					<Presence
						pos="absolute"
						top={0}
						right={6}
						key={image.src}
						present={showing}
						_open={{
							animation: "ease-out",
							animationDuration: "slowest",
							animationName: "fade-in",
						}}
						_closed={{
							animation: "ease-out",
							animationDuration: "slowest",
							animationName: "fade-out",
						}}
					>
						<Heading
							textAlign="end"
							size="7xl"
							color="green.fg/10"
							fontStyle="italic"
							fontWeight="black"
							whiteSpace="pre-wrap"
						>
							{image.alt}
						</Heading>
					</Presence>
				);
			})}
		</Center>
	);
}
