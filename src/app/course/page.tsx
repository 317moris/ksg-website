import { courses } from "@/const/course";
import {
	Card,
	Container,
	Flex,
	Heading,
	Icon,
	Link,
	LinkBox,
	LinkOverlay,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Page() {
	return (
		<Container maxW="8xl">
			<Heading>学科</Heading>
			<SimpleGrid
				columns={{
					lgDown: 1,
					lg: 2,
				}}
				w="full"
				gap="2"
			>
				{courses.map((course) => (
					<LinkBox key={course.name}>
						<Card.Root
							bg={`${course.color}.subtle`}
							borderColor={`${course.color}.emphasized`}
							overflow="hidden"
							h="full"
							className={course.font.font.variable}
							fontFamily={`var(${course.font.variable}), sans-serif`}
						>
							<Flex
								h="xs"
								align="center"
								justify="center"
								w="full"
								bg={`linear-gradient(rgba(0, 0, 0, 0), {colors.${course.color}.subtle}), url(${course.coverImage})`}
								bgSize="cover"
								bgPos="center"
							>
								<Icon
									color={`${course.color}.200`}
									fontWeight="bold"
									fontSize="6xl"
									filter={`drop-shadow(0px 4px 8px {colors.${course.color}.800})`}
								>
									<course.icon />
								</Icon>
							</Flex>
							<Card.Header alignItems="center">
								<LinkOverlay asChild>
									<Link
										colorPalette={course.color}
										textAlign="center"
										fontWeight="bold"
										fontSize={{
											smDown: "4xl",
											sm: "5xl",
											md: "6xl",
											"2xl": "7xl",
										}}
										asChild
									>
										<NextLink href={`/course/${course.href}`}>
											{course.name}
										</NextLink>
									</Link>
								</LinkOverlay>
							</Card.Header>
							<Card.Body>
								<Text fontSize="lg" whiteSpace="pre-wrap" textAlign="center">
									{course.description}
								</Text>
							</Card.Body>
						</Card.Root>
					</LinkBox>
				))}
			</SimpleGrid>
		</Container>
	);
}
