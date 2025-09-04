import {
	Card,
	Center,
	Heading,
	HStack,
	Image,
	LinkBox,
	LinkOverlay,
	StackSeparator,
	Text,
} from "@chakra-ui/react";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import NextImage from "next/image";
import NextLink from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import type { Post } from "@/interfaces/post";
import { DateFormatter } from "../date-formatter";

export default function LargePosts({
	posts,
}: {
	posts: MicroCMSListResponse<Post>;
}) {
	return posts.contents.map((post) => (
		<LinkBox key={post.id}>
			<Card.Root
				h="full"
				bg={{ _hover: "bg.muted" }}
				transition="backgrounds"
				overflow="hidden"
				justifyContent="end"
				divideY="1px"
			>
				{post.coverImage ? (
					<Image asChild aspectRatio="ultrawide">
						<NextImage
							src={post.coverImage.url}
							alt={post.coverImage.alt ?? post.title}
							width={post.coverImage.width}
							height={post.coverImage.height}
						/>
					</Image>
				) : (
					<Center
						pos="relative"
						h="full"
						p="8"
						bg="bg"
						aspectRatio="ultrawide"
						overflow="clip"
					>
						<Heading fontWeight="bolder" color="fg.subtle">
							Empty
						</Heading>
						<Text
							fontWeight="black"
							fontStyle="italic"
							pos="absolute"
							color="bg"
							bottom={0}
							right={0}
							paintOrder="stroke"
							stroke="fg.muted"
						>
							KSG
						</Text>
					</Center>
				)}
				<HStack
					justify="space-between"
					direction="column"
					separator={<StackSeparator />}
					gap="0"
				>
					<Card.Body>
						<DateFormatter date={post.createdAt} />
						<Card.Title asChild>
							<LinkOverlay asChild>
								<NextLink href={`/news/${post.id}`}>{post.title}</NextLink>
							</LinkOverlay>
						</Card.Title>
						{post.subtitle ? (
							<Card.Description>{post.subtitle}</Card.Description>
						) : null}
					</Card.Body>
					<Center p="1.5">
						<FaAngleRight />
					</Center>
				</HStack>
			</Card.Root>
		</LinkBox>
	));
}
