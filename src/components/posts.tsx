import { Card, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextLink from "next/link";
import { getAllPosts } from "@/lib/api";
import { DateFormatter } from "./date-formatter";

export default async function Posts() {
	const posts = await getAllPosts();

	return posts.contents.map((post) => (
		<LinkBox key={post.id}>
			<Card.Root h="full" size="sm">
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
				<Card.Footer justifyContent="end">
					<DateFormatter createdAt={post.createdAt} />
				</Card.Footer>
			</Card.Root>
		</LinkBox>
	));
}
