"use client";

import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type CookieSettingType = "allowed" | "denied" | "none";

export function PopupCookie() {
	const [allowed, setAllowed] = useState<CookieSettingType>("none");
	const [mount, setMount] = useState(false);

	const router = useRouter();

	useEffect(() => {
		let local: CookieSettingType;
		switch (localStorage.getItem("cookie")) {
			case "allowed":
				local = "allowed";
				break;
			case "denied":
				local = "denied";
				break;
			default:
				local = "none";
				break;
		}

		setAllowed(local);
		setMount(true);
	}, []);

	function onAllowed() {
		localStorage.setItem("cookie", "allowed");

		router.refresh();
	}

	function onDenied() {
		localStorage.setItem("cookie", "denied");

		router.refresh();
	}

	if (mount && allowed === "none")
		return (
			<Box
				pos="fixed"
				bottom={0}
				zIndex="docked"
				bg="bg"
				rounded="md"
				p="4"
				borderWidth={1}
				maxW="8xl"
			>
				<HStack justify="space-between">
					<VStack justify="start">
						<Text fontSize="lg">
							このサイトではログイン機構のデモのためにCookieを使用します。同意しますか？
						</Text>
						<Text color="fg.muted">
							同意しなかった場合、ログイン機構は利用できません。
						</Text>
					</VStack>
					<HStack>
						<Button onClick={onAllowed}>同意する</Button>
						<Button onClick={onDenied}>同意しない</Button>
					</HStack>
				</HStack>
			</Box>
		);

	return null;
}
