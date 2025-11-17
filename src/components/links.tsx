import {
	Box,
	Card,
	Center,
	HStack,
	Icon,
	Image,
	Link,
	LinkOverlay,
	VStack,
} from "@chakra-ui/react";
import NextImage from "next/image";
import type { IconType } from "react-icons";
import { FaInstagram, FaUpRightFromSquare, FaXTwitter } from "react-icons/fa6";

const links: {
	icon: IconType;
	top?: {
		src: string;
		type?: "image" | "video";
	};
	name: string;
	description: string;
	href: string;
}[] = [
	{
		icon: FaInstagram,
		top: {
			src: "https://ust41sscwb3gkyax.public.blob.vercel-storage.com/account/instagram-feed-josheUNbijYG8c2ng4OyQg2GDpBnXH.mp4",
			type: "video",
		},
		name: "Instagram",
		description: "KSG公式",
		href: "https://www.instagram.com/ksg_hs_official",
	},
	{
		icon: FaXTwitter,
		top: {
			src: "https://video.twimg.com/ext_tw_video/1237523483896274951/pu/vid/960x540/WOuDjCQlTRlb7zCV.mp4?tag=10",
			type: "video",
		},
		name: "X",
		description: "流通経済科",
		href: "https://x.com/KSG_RKs",
	},
	{
		icon: FaInstagram,
		top: { src: "/account/instagram-musicclub-feed.png" },
		name: "Instagram",
		description: "吹奏楽部",
		href: "https://www.instagram.com/ksg_musicclub",
	},
];

export function Links() {
	return links.map((link) => (
		<Card.Root
			key={link.href}
			size="sm"
			bg={{ _hover: "bg.muted" }}
			transition="backgrounds"
			overflow="hidden"
		>
			{link.top && (
				<Box pos="relative" h="52">
					{link.top.type === "video" ? (
						<Image pos="absolute" w="full" h="full" asChild>
							<video
								src={link.top.src}
								autoPlay
								disablePictureInPicture
								muted
								loop
								preload="none"
								controls={false}
							/>
						</Image>
					) : (
						<Image asChild>
							<NextImage src={link.top.src} alt={link.name} fill />
						</Image>
					)}
				</Box>
			)}
			<Card.Body flexDir="row" justifyContent="space-between">
				<VStack align="start" gap="0.5">
					<LinkOverlay asChild href={link.href} target="_blank">
						<HStack as={Link} fontWeight="semibold" fontSize="lg">
							<link.icon />
							{link.name}
						</HStack>
					</LinkOverlay>
					<Card.Description>{link.description}</Card.Description>
				</VStack>
				<Center>
					<Icon color="bg.emphasized">
						<FaUpRightFromSquare />
					</Icon>
				</Center>
			</Card.Body>
		</Card.Root>
	));
}
