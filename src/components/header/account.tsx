import { Button, IconButton, Menu, Portal } from "@chakra-ui/react";
import { cookies } from "next/headers";
import NextLink from "next/link";
import { FaRightToBracket, FaUser } from "react-icons/fa6";

export async function AccountButton() {
	const cookieStore = await cookies();
	const isLogin = cookieStore.get("login");

	return isLogin ? (
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
								onClick={() => {
									cookieStore.delete("login");
								}}
							>
								ログアウト
							</Menu.Item>
						</Menu.ItemGroup>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	) : (
		<Button asChild>
			<NextLink href="/auth" prefetch={false}>
				ログイン
				<FaRightToBracket />
			</NextLink>
		</Button>
	);
}
