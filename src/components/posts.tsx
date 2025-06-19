import {
	Card,
	ClientOnly,
	HStack,
	LinkBox,
	LinkOverlay,
	Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaUpload } from "react-icons/fa6";
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
					<ClientOnly>
						<HStack color="fg.muted" fontFamily="mono">
							<FaUpload />
							<Text>
								<DateFormatter date={post.createdAt} />
							</Text>
						</HStack>
					</ClientOnly>
				</Card.Footer>
			</Card.Root>
		</LinkBox>
	));
}
