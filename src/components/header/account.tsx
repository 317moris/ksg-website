"use client";

import { IconButton, Menu, Portal } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";

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
						<Menu.ItemGroup>
							<Menu.ItemGroupLabel>ログイン機構の模型</Menu.ItemGroupLabel>
						</Menu.ItemGroup>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
}
