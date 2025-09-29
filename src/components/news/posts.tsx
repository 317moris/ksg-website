import {
	Avatar,
	Box,
	Card,
	Center,
	Flex,
	Link,
	LinkBox,
	LinkOverlay,
	Tag,
} from "@chakra-ui/react";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import NextImage from "next/image";
import NextLink from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import type { Post } from "@/interfaces/post";
import { DateFormatter } from "../date-formatter";

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
				divideX="1px"
				bg={{ _hover: "bg.muted" }}
				transition="backgrounds"
			>
				<Flex w="full" h="full" justify="space-between" direction="column">
					<Box>
						<Card.Header flexDir="row" justifyContent="space-between">
							<Link
								asChild
								fontSize="sm"
								color={{ base: "fg.subtle", _hover: "fg" }}
								transition="common"
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
							<DateFormatter date={post.createdAt} />
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
						{post.tag ? (
							<Card.Footer>
								{post.tag?.map((tag) => (
									<Tag.Root key={tag.id}>
										{tag.icon ? (
											<Tag.StartElement>
												<Avatar.Root size="full">
													<Avatar.Image src={tag.icon.url} />
												</Avatar.Root>
											</Tag.StartElement>
										) : null}
										<Tag.Label>{tag.name}</Tag.Label>
									</Tag.Root>
								))}
							</Card.Footer>
						) : null}
					</Box>
				</Flex>
				<Center p="1.5">
					<FaAngleRight />
				</Center>
			</Card.Root>
		</LinkBox>
	));
}
