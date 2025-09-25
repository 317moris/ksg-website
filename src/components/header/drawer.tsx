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
import { useRef, useState } from "react";
import { FaList } from "react-icons/fa6";
import { Pages } from "./pages";

export function HeaderDrawer() {
	const [open, setOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement | null>(null);

	return (
		<Drawer.Root
			placement="bottom"
			open={open}
			onOpenChange={(e) => setOpen(e.open)}
		>
			<Drawer.Trigger asChild hideFrom="lg">
				<IconButton variant="outline">
					<FaList />
				</IconButton>
			</Drawer.Trigger>
			<Portal>
				<Drawer.Backdrop />
				<Drawer.Positioner>
					<Drawer.Content ref={contentRef}>
						<Drawer.Body>
							<Flex w="full" justify="center">
								<Link
									asChild
									fontWeight="bold"
									my="4"
									onClick={() => setOpen(false)}
								>
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
								<Pages drawer setOpen={setOpen} contentRef={contentRef} />
							</SimpleGrid>
						</Drawer.Body>
					</Drawer.Content>
				</Drawer.Positioner>
			</Portal>
		</Drawer.Root>
	);
}
