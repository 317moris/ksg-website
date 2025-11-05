"use client";

import { Button, Container, EmptyState, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaXmark } from "react-icons/fa6";

export default function NotFound() {
	const router = useRouter();

	return (
		<Container as="main">
			<EmptyState.Root>
				<EmptyState.Content gap={20}>
					<EmptyState.Indicator>
						<FaXmark />
					</EmptyState.Indicator>
					<VStack textAlign="center" gap={20}>
						<EmptyState.Title
							fontFamily="mono"
							fontWeight="black"
							fontSize="9xl"
							color="fg.muted"
						>
							404
						</EmptyState.Title>
					</VStack>
					<Button onClick={router.back}>
						<FaArrowLeft />
						戻る
					</Button>
				</EmptyState.Content>
			</EmptyState.Root>
		</Container>
	);
}
