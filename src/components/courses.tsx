import {
	Card,
	Flex,
	Icon,
	Link,
	LinkBox,
	LinkOverlay,
	Separator,
	Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { courses } from "@/const/course";

export function Courses() {
	return courses.map((course) => (
		<LinkBox key={course.name}>
			<Card.Root
				bg={{
					base: `${course.color}.subtle`,
					_hover: `${course.color}.muted`,
				}}
				borderColor={`${course.color}.emphasized`}
				overflow="hidden"
				h="full"
				className={course.font.font.variable}
				fontFamily={`var(${course.font.variable}), sans-serif`}
				transition="backgrounds"
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
				<Separator borderColor={`${course.color}.emphasized`} />
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
							<NextLink href={`/course/${course.href}`}>{course.name}</NextLink>
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
	));
}
