"use client";

import {
	Box,
	Drawer,
	Flex,
	HStack,
	IconButton,
	Image,
	Link,
	Portal,
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
			placement="start"
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
							<Flex direction="column" gap="2">
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
												<Box>埼玉県立越谷総合技術高等学校</Box>
											</HStack>
										</NextLink>
									</Link>
								</Flex>
								<Pages drawer setOpen={setOpen} contentRef={contentRef} />
							</Flex>
						</Drawer.Body>
					</Drawer.Content>
				</Drawer.Positioner>
			</Portal>
		</Drawer.Root>
	);
}
