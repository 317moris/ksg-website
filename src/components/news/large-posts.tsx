import {
	Avatar,
	Box,
	Card,
	Center,
	Heading,
	HStack,
	Image,
	Link,
	LinkBox,
	LinkOverlay,
	StackSeparator,
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
				size="lg"
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
					<Center pos="relative" h="full" p="8" bg="bg">
						<Heading fontWeight="bolder" color="fg.subtle">
							Empty
						</Heading>
						<Heading
							fontWeight="black"
							fontStyle="italic"
							size="7xl"
							pos="absolute"
							color="bg"
							bottom={-1}
							right={0}
							css={{ "text-stroke": "1px {colors.fg}" }}
						>
							KSG
						</Heading>
					</Center>
				)}
				<HStack
					justify="space-between"
					direction="column"
					separator={<StackSeparator />}
					gap="0"
				>
					<Box w="full">
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
							<DateFormatter createdAt={post.createdAt} />
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
					</Box>
					<Center p="1.5">
						<FaAngleRight />
					</Center>
				</HStack>
			</Card.Root>
		</LinkBox>
	));
}
