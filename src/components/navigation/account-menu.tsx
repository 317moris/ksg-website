"use client";

import { IconButton, Menu, Portal } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa6";
import { logout } from "@/lib/auth";

export function AccountMenu() {
	const router = useRouter();

	return (
		<Menu.Root positioning={{ placement: "bottom-end" }}>
			<Menu.Trigger asChild>
				<IconButton variant="outline">
					<FaUser />
				</IconButton>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						<Menu.ItemGroup>
							<Menu.ItemGroupLabel>ログイン機構の模型</Menu.ItemGroupLabel>
							<Menu.Item value="dashboard" asChild>
								<NextLink href="/dashboard">ダッシュボード</NextLink>
							</Menu.Item>
							<Menu.Separator />
							<Menu.Item
								value="logout"
								color="fg.error"
								_hover={{ bg: "bg.error", color: "fg.error" }}
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
