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
import { Prose } from "./ui/prose";

export default async function Posts() {
	const posts = await getAllPosts();

	return (
		<For each={posts.contents}>
			{(post) => (
				<LinkBox key={post.id}>
					<Card.Root maxH="xs" overflowY="clip">
						<Card.Header>
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
						</Card.Header>
						<Card.Body>
							<Prose
								size="md"
								/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */
								dangerouslySetInnerHTML={{ __html: post.content }}
							/>
						</Card.Body>
					</Card.Root>
				</LinkBox>
			)}
		</For>
	);
}
