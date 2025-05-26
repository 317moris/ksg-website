import { getAllPosts } from "@/lib/api";
import {
	Card,
	ClientOnly,
	For,
	LinkBox,
	LinkOverlay,
	Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { DateFormatter } from "./date-formatter";

export default async function Posts() {
	const posts = await getAllPosts();

	return (
		<For each={posts.contents}>
			{(post) => (
				<LinkBox key={post.id}>
					<Card.Root maxH="xs" overflowY="clip">
						<Card.Body>
							<ClientOnly>
								<Text color="fg.muted" fontFamily="mono">
									<DateFormatter date={post.createdAt} />
								</Text>
							</ClientOnly>
							<Card.Title>
								<LinkOverlay asChild>
									<NextLink href={`/news/${post.id}`}>{post.title}</NextLink>
								</LinkOverlay>
							</Card.Title>
							{post.subtitle ? (
								<Card.Description>{post.subtitle}</Card.Description>
							) : null}
						</Card.Body>
					</Card.Root>
				</LinkBox>
			)}
		</For>
	);
}
