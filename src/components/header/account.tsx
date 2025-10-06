import { Button } from "@chakra-ui/react";
import { cookies } from "next/headers";
import { FaRightToBracket } from "react-icons/fa6";
import { AccountMenu } from "./account-menu";

export async function AccountButton() {
	const cookieStore = await cookies();
	const isLogin = cookieStore.get("login");

	return isLogin ? (
		<AccountMenu />
	) : (
		<Button asChild>
			<a href="/auth">
				ログイン
				<FaRightToBracket />
			</a>
		</Button>
	);
}
