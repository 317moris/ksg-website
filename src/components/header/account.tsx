"use client";

import {
	Button,
	type ButtonProps,
	CloseButton,
	Drawer,
	IconButton,
	Menu,
	Portal,
	SimpleGrid,
	VStack,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaMoon, FaSun, FaUser } from "react-icons/fa6";
import { useColorMode } from "../ui/color-mode";

export function AccountButton() {
	return (
		<Menu.Root positioning={{ placement: "bottom-end" }}>
			<Menu.Trigger asChild>
				<IconButton variant="outline" color="fg.muted">
					<FaUser />
				</IconButton>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						{/* <Menu.Item value="new-txt">New Text File</Menu.Item>
						<Menu.Item value="new-file">New File...</Menu.Item>
						<Menu.Item value="new-win">New Window</Menu.Item>
						<Menu.Item value="open-file">Open File...</Menu.Item>
						<Menu.Item value="export">Export</Menu.Item> */}
						<SimpleGrid columns={2} gap="1">
							<SelectColorMode />
						</SimpleGrid>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
}

export function AccountButtonSm() {
	return (
		<Drawer.Root>
			<Drawer.Trigger asChild>
				<IconButton variant="outline" color="fg.muted">
					<FaUser />
				</IconButton>
			</Drawer.Trigger>
			<Portal>
				<Drawer.Backdrop />
				<Drawer.Positioner>
					<Drawer.Content>
						<Drawer.Header>
							<Drawer.Title>Drawer Title</Drawer.Title>
						</Drawer.Header>
						<Drawer.Body>
							<SimpleGrid columns={2} gap="1">
								<SelectColorMode />
							</SimpleGrid>
						</Drawer.Body>
						<Drawer.Footer>
							<Button variant="outline">Cancel</Button>
							<Button>Save</Button>
						</Drawer.Footer>
						<Drawer.CloseTrigger asChild>
							<CloseButton size="sm" />
						</Drawer.CloseTrigger>
					</Drawer.Content>
				</Drawer.Positioner>
			</Portal>
		</Drawer.Root>
	);
}

function SelectColorMode(props: ButtonProps) {
	const { colorMode, setColorMode } = useColorMode();

	const modes: {
		name: string;
		value: "light" | "dark";
		icon: IconType;
	}[] = [
		{
			name: "ライト",
			value: "light",
			icon: FaSun,
		},
		{
			name: "ダーク",
			value: "dark",
			icon: FaMoon,
		},
		// {
		// 	name: "システム",
		// 	value: "system",
		// 	icon: FaComputer,
		// },
	];

	return modes.map((mode) => {
		const selected = mode.value === colorMode;

		return (
			<Button
				key={mode.value}
				{...props}
				variant="outline"
				color={selected ? "green.fg" : "fg.subtle"}
				h="fit"
				py="2"
				onClick={() => setColorMode(mode.value)}
			>
				<VStack>
					<mode.icon />
					{mode.name}
				</VStack>
			</Button>
		);
	});
}
