"use client";

import {
	Button,
	Card,
	Container,
	Field,
	Input,
	Separator,
	Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowRightToBracket, FaGoogle } from "react-icons/fa6";
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
			<Container centerContent py="12">
				<Card.Root w="full" maxW="lg" variant="elevated">
					<Card.Header>
						<Card.Title>ログイン (デモ)</Card.Title>
						<Card.Description>
							以下のフィールドに入力された情報は一切送信されません。
						</Card.Description>
					</Card.Header>
					{cookie === CookieSettings.Allowed && (
						<>
							<Card.Body spaceY="4">
								<Button variant="surface" disabled>
									<FaGoogle />
									Googleアカウントでログイン
								</Button>
								<Separator />
								<Field.Root>
									<Field.Label>メールアドレス</Field.Label>
									<Input
										type="email"
										placeholder="koshigaya.taro.ks@st.spec.ed.jp"
									/>
								</Field.Root>
								<Field.Root>
									<Field.Label>パスワード</Field.Label>
									<Input type="password" />
								</Field.Root>
							</Card.Body>
							<Card.Footer justifyContent="end">
								<Button onClick={auth}>
									ログイン
									<FaArrowRightToBracket />
								</Button>
							</Card.Footer>
						</>
					)}
					{cookie === CookieSettings.Denied && (
						<Card.Body>
							<Text>Cookieが拒否されています。</Text>
							<Button
								onClick={() => {
									localStorage.removeItem("cookie");
									location.reload();
								}}
							>
								拒否を取り消し
							</Button>
						</Card.Body>
					)}
				</Card.Root>
			</Container>
			<PopupCookie />
		</>
	);
}
