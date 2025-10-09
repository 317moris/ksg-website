import { Button, IconButton } from "@chakra-ui/react";
import { cookies } from "next/headers";
import { FaRightToBracket } from "react-icons/fa6";
import { AccountMenu } from "./account-menu";

export async function AccountButton() {
	const cookieStore = await cookies();
	const isLogin = cookieStore.get("login");

	return isLogin ? (
		<AccountMenu />
	) : (
		<>
			<Button hideBelow="md" asChild>
				<a href="/auth">
					ログイン
					<FaRightToBracket />
				</a>
			</Button>
			<IconButton hideFrom="md" asChild>
				<a href="/auth">
					<FaRightToBracket />
				</a>
			</IconButton>
		</>
	);
}
