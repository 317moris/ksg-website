"use client";

import { Drawer, Flex, IconButton, Portal } from "@chakra-ui/react";
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
				<IconButton variant="ghost">
					<FaList />
				</IconButton>
			</Drawer.Trigger>
			<Portal>
				<Drawer.Backdrop />
				<Drawer.Positioner>
					<Drawer.Content ref={contentRef}>
						<Drawer.Body>
							<Flex direction="column" gap="2">
								<Pages drawer setOpen={setOpen} contentRef={contentRef} />
							</Flex>
						</Drawer.Body>
					</Drawer.Content>
				</Drawer.Positioner>
			</Portal>
		</Drawer.Root>
	);
}
