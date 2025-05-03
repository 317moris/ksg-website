import { getAllPosts } from "@/lib/api";
import { Card, For, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { DateFormatter } from "./date-formatter";
import { Prose } from "./ui/prose";

export default async function Posts() {
	const posts = await getAllPosts();

	return (
		// <For each={posts}>
		// 	{(post, i) => (
		// 		<LinkBox key={post.slug}>
		// 			<Card.Root size="sm" h="full">
		// 				<Card.Header>
		// 					<Card.Title>
		// 						<LinkOverlay asChild>
		// 							<NextLink href={`/news/${post.slug}`}>{post.title}</NextLink>
		// 						</LinkOverlay>
		// 					</Card.Title>
		// 				</Card.Header>
		// 				<Card.Body>
		// 					<Card.Description whiteSpace="pre-wrap">
		// 						{post.description}
		// 					</Card.Description>
		// 				</Card.Body>
		// 				<Card.Footer>
		// 					<Image asChild w="full" rounded="md" aspectRatio={16 / 9}>
		// 						<NextImage
		// 							src={post.coverImage}
		// 							alt={post.title}
		// 							height={1280}
		// 							width={720}
		// 						/>
		// 					</Image>
		// 				</Card.Footer>
		// 			</Card.Root>
		// 		</LinkBox>
		// 	)}
		// </For>
		<For each={posts.contents}>
			{(post) => {
				const createdAt = new Date(post.createdAt);

				return (
					<LinkBox key={post.id}>
						<Card.Root>
							<Card.Header>
								<Text color="fg.muted" fontFamily="mono">
									<DateFormatter date={post.createdAt} />
								</Text>
								<Card.Title>
									<LinkOverlay asChild>
										<NextLink href={`/news/${post.id}`}>{post.title}</NextLink>
									</LinkOverlay>
								</Card.Title>
							</Card.Header>
							<Card.Body
								textOverflow="ellipsis"
								overflowWrap="break-word"
								overflowY="clip"
								maxH="xs"
							>
								<Prose
									size="md"
									/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */
									dangerouslySetInnerHTML={{ __html: post.content }}
								/>
							</Card.Body>
						</Card.Root>
					</LinkBox>
				);
			}}
		</For>
	);
}
