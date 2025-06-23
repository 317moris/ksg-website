import { Card, Icon, Link, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextLink from "next/link";
import type { IconType } from "react-icons";
import { FaBook, FaLocationPin, FaTimeline } from "react-icons/fa6";

type InfoType = {
	name: string;
	href: string;
	icon: IconType;
	image: string;
	alt: string;
};

const info: InfoType[] = [
	{
		name: "教育目標",
		href: "educational-goals",
		icon: FaBook,
		image: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/1/6208/small",
		alt: "校章",
	},
	{
		name: "沿革",
		href: "school-history",
		icon: FaTimeline,
		image:
			"https://ksg-h.spec.ed.jp/photo_albums/photo_album_photos/photo/426/855cee557531732da8baef9325296ed1/81/big",
		alt: "校舎のイラスト",
	},
	{
		name: "アクセス",
		href: "location",
		icon: FaLocationPin,
		image: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/1/40/big",
		alt: "案内図",
	},
];

export function Info() {
	return info.map((info) => (
		<LinkBox key={info.href}>
			<Card.Root
				h="full"
				overflow="hidden"
				bgImg={`url(${info.image})`}
				bgPos="center"
				bgSize="cover"
				bgBlendMode="color"
				bgColor="bg/90"
			>
				<Card.Body
					gap="8"
					py="16"
					backdropFilter="blur(4px)"
					alignItems="center"
				>
					<Icon boxSize="16">
						<info.icon />
					</Icon>
					<Card.Title asChild fontSize="4xl">
						<LinkOverlay asChild>
							<Link variant="underline" colorPalette="green" asChild>
								<NextLink href={info.href}>{info.name}</NextLink>
							</Link>
						</LinkOverlay>
					</Card.Title>
				</Card.Body>
			</Card.Root>
		</LinkBox>
	));
}
