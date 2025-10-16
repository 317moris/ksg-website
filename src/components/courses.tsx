import {
	Bleed,
	Card,
	Center,
	Icon,
	Image,
	Link,
	LinkBox,
	LinkOverlay,
	Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
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
				transition="backgrounds"
			>
				<Center
					pos="relative"
					h="xs"
					w="full"
					// bg={`linear-gradient(rgba(0, 0, 0, 0), {colors.${course.color}.subtle}), url(${course.coverImage})`}
				>
					<Image asChild>
						<NextImage
							src={course.coverImage}
							alt={course.name}
							fill
							unoptimized
						/>
					</Image>
					<Bleed
						pos="absolute"
						w="full"
						h="full"
						gradientFrom="bg/40"
						gradientTo={`${course.color}.subtle`}
						_hover={{
							gradientTo: "transparent",
							gradientFrom: "transparent",
						}}
						bgGradient="to-b"
					/>
					<Icon
						color={`${course.color}.200`}
						fontWeight="bold"
						fontSize="6xl"
						filter={`drop-shadow(0px 4px 8px {colors.${course.color}.800})`}
					>
						<course.icon />
					</Icon>
				</Center>
				{/* <Separator borderColor={`${course.color}.emphasized`} /> */}
				<Card.Header
					alignItems="center"
					className={course.font.font.variable}
					fontFamily={`var(${course.font.variable}), sans-serif`}
				>
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
