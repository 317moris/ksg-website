"use client";

import { Button, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();

	return (
		<Container>
			<Text>ログインページ</Text>
			<Button
				onClick={() => {
					router.push("/");
				}}
			></Button>
		</Container>
	);
}
