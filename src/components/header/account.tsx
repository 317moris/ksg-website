"use client";

import {
	Button,
	type ButtonProps,
	CloseButton,
	Drawer,
	Group,
	Menu,
	Portal,
	VStack,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useColorMode } from "../ui/color-mode";

export function AccountButton() {
	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline" size="sm">
					Open
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						<Menu.Item value="new-txt">New Text File</Menu.Item>
						<Menu.Item value="new-file">New File...</Menu.Item>
						<Menu.Item value="new-win">New Window</Menu.Item>
						<Menu.Item value="open-file">Open File...</Menu.Item>
						<Menu.Item value="export">Export</Menu.Item>
						<Group attached grow>
							<SelectColorMode />
						</Group>
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
				<Button variant="outline" size="sm">
					Open Drawer
				</Button>
			</Drawer.Trigger>
			<Portal>
				<Drawer.Backdrop />
				<Drawer.Positioner>
					<Drawer.Content>
						<Drawer.Header>
							<Drawer.Title>Drawer Title</Drawer.Title>
						</Drawer.Header>
						<Drawer.Body>
							<Group attached grow>
								<SelectColorMode />
							</Group>
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
