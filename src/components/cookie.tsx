"use client";

import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { animation } from "@/animation";
import { CookieSettings, type CookieSettingType } from "@/interfaces/cookie";

export function refreshSetting(
	localStorage: Storage,
	setState: Dispatch<SetStateAction<CookieSettingType | null>>,
	router?: AppRouterInstance,
) {
	let local: CookieSettingType;
	const cookieSetting = localStorage.getItem("cookie");
	if (
		cookieSetting === CookieSettings.Allowed ||
		cookieSetting === CookieSettings.Denied
	) {
		local = cookieSetting;
	} else {
		local = CookieSettings.None;
	}

	setState(local);
	if (router) router.refresh();
}

export function PopupCookie() {
	const router = useRouter();
	const [allowed, setAllowed] = useState<CookieSettingType | null>(null);

	useEffect(() => {
		refreshSetting(localStorage, setAllowed);
	}, []);

	function onAllowed() {
		localStorage.setItem("cookie", CookieSettings.Allowed);

		refreshSetting(localStorage, setAllowed, router);
	}

	function onDenied() {
		localStorage.setItem("cookie", CookieSettings.Denied);

		refreshSetting(localStorage, setAllowed, router);
	}

	if (allowed === CookieSettings.None)
		return (
			<Box
				pos="fixed"
				left="0"
				right="0"
				bottom="4"
				mx="auto"
				zIndex="docked"
				w="fit"
				{...animation}
			>
				<VStack
					borderWidth={1}
					mx="4"
					bg="bg.panel"
					p="4"
					maxW="8xl"
					rounded="md"
				>
					<VStack align="start">
						<Text fontSize="lg">
							このサイトではログイン機構のデモのためにCookieを使用します。同意しますか？
						</Text>
						<Text color="fg.muted">
							同意しなかった場合、ログイン機構は利用できません。
						</Text>
					</VStack>
					<HStack w="full" justify="end">
						<Button onClick={onAllowed}>同意する</Button>
						<Button onClick={onDenied}>同意しない</Button>
					</HStack>
				</VStack>
			</Box>
		);

	return null;
}
