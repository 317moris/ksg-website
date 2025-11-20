import { Container, EmptyState, Spinner, VStack } from "@chakra-ui/react";

export default function Loading() {
	return (
		<Container as="main">
			<EmptyState.Root>
				<EmptyState.Content>
					<EmptyState.Indicator>
						<Spinner />
					</EmptyState.Indicator>
					<VStack>
						<EmptyState.Title
							fontFamily="mono"
							fontWeight="black"
							fontSize="xl"
							color="fg.muted"
						>
							Loading...
						</EmptyState.Title>
					</VStack>
				</EmptyState.Content>
			</EmptyState.Root>
		</Container>
	);
}
