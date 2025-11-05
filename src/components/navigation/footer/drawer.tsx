"use client";

import {
	Drawer,
	Flex,
	HStack,
	IconButton,
	Image,
	Link,
	Portal,
	SimpleGrid,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { useRef } from "react";
import { FaBars } from "react-icons/fa6";
import type { PageProps } from "@/interfaces/pages";
import { PagesinHeader } from "../pages";

export function PagesDrawer({ pages }: { pages: PageProps[] }) {
	const contentRef = useRef<HTMLDivElement | null>(null);

	return (
		<Drawer.Root placement="bottom">
			<Drawer.Trigger asChild>
				<IconButton variant="outline">
					<FaBars />
				</IconButton>
			</Drawer.Trigger>
			<Portal>
				<Drawer.Backdrop hideFrom="sm" />
				<Drawer.Positioner hideFrom="sm">
					<Drawer.Content ref={contentRef}>
						<Drawer.Body>
							<Flex w="full" justify="center">
								<Link asChild fontWeight="bold" my="4">
									<NextLink href="/">
										<HStack>
											<Image asChild boxSize={9} rounded="full">
												<NextImage
													src="/icon/kosho.png"
													alt="校章"
													width={600}
													height={600}
												/>
											</Image>
											埼玉県立越谷総合技術高等学校
										</HStack>
									</NextLink>
								</Link>
							</Flex>
							<SimpleGrid columns={2} minChildWidth="40" gap={2}>
								<PagesinHeader pages={pages} contentRef={contentRef} />
							</SimpleGrid>
						</Drawer.Body>
					</Drawer.Content>
				</Drawer.Positioner>
			</Portal>
		</Drawer.Root>
	);
}
