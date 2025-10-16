"use client";

import { Button, Container, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PopupCookie, refreshSetting } from "@/components/cookie";
import { CookieSettings, type CookieSettingType } from "@/interfaces/cookie";
import { auth } from "@/lib/auth";

export default function Page() {
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
					<Button onClick={auth}>ログイン</Button>
				)}
				{cookie === CookieSettings.Denied && (
					<>
						<Text>Cookieが拒否されています。</Text>
						<Button
							onClick={() => {
								localStorage.removeItem("cookie");
								location.reload();
							}}
						>
							拒否を取り消し
						</Button>
					</>
				)}
			</Container>
			<PopupCookie />
		</>
	);
}
