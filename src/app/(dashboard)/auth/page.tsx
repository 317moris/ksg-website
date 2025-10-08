"use client";

import { Button, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PopupCookie, refreshSetting } from "@/components/cookie";
import { CookieSettings, type CookieSettingType } from "@/interfaces/cookie";
import { auth } from "@/lib/auth";

export default function Page() {
	const router = useRouter();
	const [cookie, setCookie] = useState<CookieSettingType | null>(null);

	useEffect(() => {
		refreshSetting(localStorage, setCookie);
	}, []);

	if (!cookie) return null;

	return (
		<>
			<Container>
				<Text>ログインページ</Text>
				{cookie === CookieSettings.Allowed && (
					<Button
						onClick={async () => {
							await auth();
							router.refresh();
						}}
					>
						ログイン
					</Button>
				)}
			</Container>
			<PopupCookie />
		</>
	);
}
