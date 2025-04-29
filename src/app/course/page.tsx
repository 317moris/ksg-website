import { courses } from "@/const/course";
import {
	Card,
	Container,
	Heading,
	Link,
	LinkBox,
	LinkOverlay,
	Text,
	VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Page() {
	return (
		<Container maxW="8xl">
			<Heading>学科</Heading>
			<VStack>
				{courses.map((course) => (
					<LinkBox key={course.name} w="full">
						<Card.Root
							bg={`${course.color}.subtle`}
							borderColor={`${course.color}.emphasized`}
						>
							<Card.Header>
								<LinkOverlay asChild>
									<Link
										fontSize="6xl"
										fontWeight="bold"
										asChild
										colorPalette={course.color}
									>
										<NextLink href={`/course/${course.href}`}>
											<course.icon /> {course.name}
										</NextLink>
									</Link>
								</LinkOverlay>
							</Card.Header>
							<Card.Body>
								<Text color="fg" whiteSpace="pre-wrap">
									{course.description}
								</Text>
							</Card.Body>
						</Card.Root>
					</LinkBox>
				))}
			</VStack>
		</Container>
	);
}
