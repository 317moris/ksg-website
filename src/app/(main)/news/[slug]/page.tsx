import {
	Avatar,
	Box,
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
import { getDetail, getListIds } from "@/lib/api";

export default async function Page(props: Params) {
	const params = await props.params;
	const post = await getDetail(params.slug).catch(() => notFound());

	return (
		<Container maxW="4xl" py="10" spaceY="10">
			{post.coverImage ? (
				<Image asChild w="full" rounded="lg">
					<NextImage
						src={post.coverImage.url}
						alt={post.title}
						width={post.coverImage.width}
						height={post.coverImage.height}
					/>
				</Image>
			) : null}
			<Heading size="4xl">{post.title}</Heading>
			<HStack align="end" justify="space-between">
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
					<DateFormatter date={post.createdAt} />
				</Box>
			</HStack>
			<Separator w="full" />
			{/** biome-ignore lint/security/noDangerouslySetInnerHtml: <microCMSからのHTMLであるため> */}
			<Prose w="full" dangerouslySetInnerHTML={{ __html: post.content }} />
		</Container>
	);
}

export async function generateStaticParams() {
	return (await getListIds()).map((id) => ({
		slug: id,
	}));
}
