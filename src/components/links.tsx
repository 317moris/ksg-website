import { Card, HStack, Icon, Link, LinkOverlay } from "@chakra-ui/react";
import { FaInstagram, FaUpRightFromSquare, FaXTwitter } from "react-icons/fa6";

const links = [
	{
		icon: FaInstagram,
		name: "Instagram",
		description: "KSG公式 インスタ",
		href: "https://www.instagram.com/ksg_hs_official",
	},
	{
		icon: FaXTwitter,
		name: "X",
		description: "流通経済科 X",
		href: "https://x.com/KSG_RKs",
	},
];

export function Links() {
	return links.map((link) => (
		<Card.Root
			key={link.name}
			size="sm"
			flexDir="row"
			bg={{ _hover: "bg.muted" }}
			transition="backgrounds"
		>
			<Card.Body>
				<LinkOverlay asChild href={link.href} target="_blank">
					<HStack as={Link} fontWeight="semibold" fontSize="lg">
						<link.icon />
						{link.name}
					</HStack>
				</LinkOverlay>
				<Card.Description>{link.description}</Card.Description>
			</Card.Body>
			<Card.Footer mt="-4">
				<Icon color="fg.subtle">
					<FaUpRightFromSquare />
				</Icon>
			</Card.Footer>
		</Card.Root>
	));
}
