"use client";

import { Button, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "@/lib/auth";

export default function Page() {
	const router = useRouter();
	const _isAccept = useState("none");

	return (
		<Container>
			<Text>ログインページ</Text>
			<Button
				onClick={async () => {
					await auth();
					router.refresh();
				}}
			>
				ログイン
			</Button>
		</Container>
	);
}
