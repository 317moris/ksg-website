import { Flex, Heading, Text } from "@chakra-ui/react";

export function PageHeader({
	title,
	subtitle,
	image,
}: {
	title: string;
	subtitle: string;
	image: string;
}) {
	return (
		<Flex
			w="full"
			rounded="lg"
			bgImage={`url(${image})`}
			bgRepeat="no-repeat"
			bgPos="center"
			bgSize="cover"
			bgBlendMode="color"
			bgColor="bg/80"
			borderWidth={1}
		>
			<Flex
				gap="3"
				w="full"
				h="full"
				direction="column"
				align="center"
				p="16"
				backdropFilter="blur(4px)"
			>
				<Heading color="green.fg" size="5xl" textShadow="lg">
					{title}
				</Heading>
				<Text>{subtitle}</Text>
			</Flex>
		</Flex>
	);
}
