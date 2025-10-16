"use client";

import { IconButton, Menu, Portal } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa6";
import { logout } from "@/lib/auth";

export function AccountMenu() {
	const router = useRouter();

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
							<Menu.Item
								value="logout"
								onClick={async () => {
									await logout();
									router.refresh();
								}}
							>
								ログアウト
							</Menu.Item>
						</Menu.ItemGroup>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
}
