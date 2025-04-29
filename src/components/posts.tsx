import { getAllPosts } from "@/lib/api";
import { Card, For, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

export default async function Posts() {
	const posts = await getAllPosts();

	return (
		<For each={posts}>
			{(post, i) => (
				<LinkBox key={post.slug}>
					<Card.Root size="sm" h="full">
						<Card.Header>
							<Card.Title>
								<LinkOverlay asChild>
									<NextLink href={`/news/${post.slug}`}>{post.title}</NextLink>
								</LinkOverlay>
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Card.Description whiteSpace="pre-wrap">
								{post.description}
							</Card.Description>
						</Card.Body>
						<Card.Footer>
							<Image asChild w="full" rounded="md" aspectRatio={16 / 9}>
								<NextImage
									src={post.coverImage}
									alt={post.title}
									height={1280}
									width={720}
								/>
							</Image>
						</Card.Footer>
					</Card.Root>
				</LinkBox>
			)}
		</For>
	);
}
