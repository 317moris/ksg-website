import {
	Avatar,
	Bleed,
	Box,
	Center,
	Container,
	Heading,
	HStack,
	Image,
	Link,
	Separator,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { DateFormatter } from "@/components/date-formatter";
import { Prose } from "@/components/ui/prose";
import type { Params } from "@/interfaces/params";
import { getDetail, getListIds, getNextPost, getPreviousPost } from "@/lib/api";
import PrevNextPost from "@/components/news/prev_next_post";

export default async function Page(props: Params) {
	const params = await props.params;
	const post = await getDetail(params.slug).catch(() => notFound());
	if (!post.publishedAt) return;

	const [previousPost, nextPost] = await Promise.all([
		getPreviousPost(post.publishedAt),
		getNextPost(post.publishedAt),
	]);

	return (
		<Container centerContent py="10" spaceY="10">
			<Center rounded="lg" overflow="hidden" pos="relative" w="full">
				{post.coverImage ? (
					<>
						<Image asChild>
							<NextImage src={post.coverImage.url} alt={post.title} fill />
						</Image>
						<Bleed
							pos="absolute"
							w="full"
							h="full"
							backdropFilter="blur(16px)"
							bg="bg/80"
						/>
					</>
				) : null}
				<Heading pos="relative" size="4xl" p="16">
					{post.title}
				</Heading>
			</Center>
			<HStack w="full" maxW="3xl" align="end" justify="space-between">
				<Link asChild>
					<NextLink href={`/news/author/${post.author.id}`}>
						<Avatar.Root mr="1">
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
				<Box whiteSpace="nowrap">
					<DateFormatter date={post.publishedAt} />
				</Box>
			</HStack>
			<Separator maxW="3xl" w="full" />
			<Prose
				w="full"
				maxW="3xl"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <microCMSからのHTMLであるため>
				dangerouslySetInnerHTML={{ __html: post.content }}
			/>
			<Separator w="full" />
			<PrevNextPost w="full" previousPost={previousPost} nextPost={nextPost} />
		</Container>
	);
}

export async function generateStaticParams() {
	return (await getListIds()).map((id) => ({
		slug: id,
	}));
}
