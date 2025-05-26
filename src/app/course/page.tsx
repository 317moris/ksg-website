import { courses } from "@/const/course";
import {
	Box,
	Card,
	Container,
	Heading,
	Icon,
	Link,
	LinkBox,
	LinkOverlay,
	SimpleGrid,
	Text,
	VStack,
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
							<Box
								h="xs"
								w="full"
								bg={`linear-gradient(rgba(0, 0, 0, 0), {colors.${course.color}.subtle}), url(${course.coverImage})`}
								bgSize="cover"
								bgPos="center"
							/>
							<Card.Header>
								<VStack fontSize="6xl" fontWeight="bold">
									<Icon color={`${course.color}.fg`}>
										<course.icon />
									</Icon>
									<LinkOverlay asChild>
										<Link
											colorPalette={course.color}
											textAlign="center"
											asChild
										>
											<NextLink href={`/course/${course.href}`}>
												{course.name}
											</NextLink>
										</Link>
									</LinkOverlay>
								</VStack>
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
