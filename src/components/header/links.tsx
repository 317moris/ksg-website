"use client";

import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./links_data";

export function Links() {
	const path = usePathname();
	return links.map((link) => {
		let isActive = false;
		if (link.href === path) isActive = true;
		if (link.href !== "/" && path.match(link.href)) isActive = true;

		return (
			<Button
				key={link.name}
				variant={isActive ? "solid" : "outline"}
				asChild
				color={isActive ? "fg.inverted" : "fg.muted"}
				w={{ lgDown: "fit", lg: "100%" }}
				justifyContent="start"
				textOverflow="ellipsis"
				overflowWrap="break-word"
				whiteSpace="wrap"
				h="fit"
				py={2}
			>
				<NextLink href={link.href}>
					<link.icon /> {link.name}
				</NextLink>
			</Button>
		);
	});
}
