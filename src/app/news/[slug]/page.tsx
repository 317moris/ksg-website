import { Heading, HStack, Image, Separator } from "@chakra-ui/react";
import NextImage from "next/image";
import { notFound } from "next/navigation";
import { DateFormatter } from "@/components/date-formatter";
import { MainContainer } from "@/components/ui/main-container";
import { Prose } from "@/components/ui/prose";
import type { Params } from "@/interfaces/params";
import { getPostBySlug } from "@/lib/api";

export default async function Page(props: Params) {
	const params = await props.params;
	const post = await getPostBySlug(params.slug);

	if (!post) return notFound();

	return (
		<MainContainer maxW="4xl" py="10" spaceY="10">
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
			<HStack w="full" align="end" justify="space-between">
				<Heading size="4xl">{post.title}</Heading>
				<DateFormatter createdAt={post.createdAt} />
			</HStack>
			<Separator w="full" />
			{/** biome-ignore lint/security/noDangerouslySetInnerHtml: <microCMSからのHTMLであるため> */}
			<Prose w="full" dangerouslySetInnerHTML={{ __html: post.content }} />
		</MainContainer>
	);
}

export function generateStaticParams() {
	return [];
}
