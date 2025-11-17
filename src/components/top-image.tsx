"use client";

import {
	Bleed,
	Center,
	ClientOnly,
	Heading,
	Image,
	Presence,
	Skeleton,
} from "@chakra-ui/react";
import NextImage from "next/image";
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
		alt: "外部講師\nによる授業",
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

	const [viewportScroll, setViewportScroll] = useState(0);

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

	useEffect(() => {
		function handleScroll() {
			setViewportScroll(window.scrollY / window.innerHeight);
		}

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Center
			pos="fixed"
			zIndex="-1"
			top="0"
			overflow="hidden"
			w="full"
			h={{ "2xlDown": "vh", "2xl": "60rem" }}
			userSelect="none"
			opacity={1 - viewportScroll}
		>
			<ClientOnly fallback={<Skeleton w="full" h="full" />}>
				{images.map((image, i) => {
					const showing = i === imageIndex;

					return (
						<Presence
							pos="absolute"
							key={image.src}
							present={showing && viewportScroll < 1}
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
							w="full"
							h="full"
						>
							<Image asChild>
								<NextImage src={image.src} alt={image.alt} fill unoptimized />
							</Image>
						</Presence>
					);
				})}
				{images.map((image, i) => {
					const showing = i === imageIndex;
					const texts = image.alt.split("\n");

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
							{texts.map((text) => (
								<Heading
									key={text}
									textAlign="end"
									size="7xl"
									color="green.fg/7"
									fontStyle="italic"
									fontWeight="black"
									whiteSpace="nowrap"
								>
									{text}
								</Heading>
							))}
						</Presence>
					);
				})}
			</ClientOnly>
			<Bleed
				pos="absolute"
				w="full"
				h="full"
				bgGradient="to-b"
				gradientFrom="bg/50"
				gradientTo="bg"
			/>
		</Center>
	);
}
