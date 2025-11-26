import {
	AbsoluteCenter,
	Avatar,
	Box,
	Card,
	Center,
	Heading,
	HStack,
	Icon,
	Image,
	LinkBox,
	LinkOverlay,
	Tag,
	Text,
	VStack,
} from "@chakra-ui/react";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import NextImage from "next/image";
import NextLink from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import type { Post, RecentPost } from "@/interfaces/post";
import { DateFormatter } from "../date-formatter";

export default function LargePosts({
	posts,
}: {
	posts: MicroCMSListResponse<RecentPost>;
}) {
	return posts.contents.map((post) => (
		<LinkBox key={post.id}>
			<Card.Root
				h="full"
				bg={{ _hover: "bg.muted" }}
				transition="backgrounds"
				overflow="hidden"
				divideY="1px"
			>
				<Box pos="relative" h="44">
					{post.coverImage ? (
						<Image asChild>
							<NextImage
								src={post.coverImage.url}
								alt={post.coverImage.alt ?? post.title}
								fill
							/>
						</Image>
					) : (
						<AbsoluteCenter w="full" h="full">
							<Text
								fontWeight="black"
								fontStyle="italic"
								pos="absolute"
								color="bg.panel"
								bottom={0}
								right={0}
								fontSize="6xl"
								lineHeight={1}
								stroke="fg.muted"
							>
								KSG
							</Text>
							<Heading fontWeight="bolder" color="fg.subtle">
								Empty
							</Heading>
						</AbsoluteCenter>
					)}
				</Box>
				<Card.Body flexDir="row" justifyContent="space-between" gap="5">
					<VStack align="start" w="full">
						<HStack w="full" align="start" justify="space-between">
							<Card.Title asChild>
								<LinkOverlay asChild>
									<NextLink href={`/news/${post.id}`}>{post.title}</NextLink>
								</LinkOverlay>
							</Card.Title>
							<DateFormatter date={post.createdAt} />
						</HStack>
						{post.subtitle ? (
							<Card.Description>{post.subtitle}</Card.Description>
						) : null}
						{post.tag?.length ? (
							<HStack align="start">
								{post.tag.map((tag) => (
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
							</HStack>
						) : null}
					</VStack>
					<Center>
						<Icon color="fg.subtle">
							<FaAngleRight />
						</Icon>
					</Center>
				</Card.Body>
			</Card.Root>
		</LinkBox>
	));
}
