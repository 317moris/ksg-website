import {
	Avatar,
	Card,
	Center,
	Flex,
	Image,
	Link,
	LinkBox,
	LinkOverlay,
} from "@chakra-ui/react";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import NextImage from "next/image";
import NextLink from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import type { Post } from "@/interfaces/post";
import { DateFormatter } from "./date-formatter";

export default function Posts({
	posts,
}: {
	posts: MicroCMSListResponse<Post>;
}) {
	return posts.contents.map((post) => (
		<LinkBox key={post.id}>
			<Card.Root
				h="full"
				size="sm"
				flexDir="row"
				bg={{ base: "bg.panel", _hover: "bg.muted" }}
			>
				{post.coverImage && (
					<Image asChild aspectRatio={4 / 3} maxW="xs" w="full">
						<NextImage
							src={post.coverImage.url}
							alt={post.title}
							width={post.coverImage.width}
							height={post.coverImage.height}
						/>
					</Image>
				)}
				<Flex w="full" h="full" justify="space-between" direction="column">
					<div>
						<Card.Header>
							<Link
								asChild
								variant="underline"
								fontSize="sm"
								color={{ _hover: "green.fg" }}
								w="fit"
							>
								<NextLink href={`/news?author=${post.author.id}`}>
									<Avatar.Root size="xs">
										<Avatar.Fallback name={post.author.name} />
										{post.author.icon && (
											<Avatar.Image asChild>
												<NextImage
													src={post.author.icon.url}
													alt={post.author.icon.alt ?? post.author.name}
													width={post.author.icon.width}
													height={post.author.icon.height}
												/>
											</Avatar.Image>
										)}
									</Avatar.Root>
									{post.author.name}
								</NextLink>
							</Link>
						</Card.Header>
						<Card.Body>
							<Card.Title asChild>
								<LinkOverlay asChild>
									<NextLink href={`/news/${post.id}`}>{post.title}</NextLink>
								</LinkOverlay>
							</Card.Title>
							{post.subtitle ? (
								<Card.Description>{post.subtitle}</Card.Description>
							) : null}
						</Card.Body>
					</div>
					<Card.Footer justifyContent="end">
						<DateFormatter createdAt={post.createdAt} />
					</Card.Footer>
				</Flex>
				<Center borderLeftWidth={1} p="2">
					<FaAngleRight />
				</Center>
			</Card.Root>
		</LinkBox>
	));
}
