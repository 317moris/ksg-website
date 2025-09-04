import { Container, Heading, HStack, Image, Separator } from "@chakra-ui/react";
import NextImage from "next/image";
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
			<HStack w="full" align="end" justify="space-between">
				<Heading size="4xl">{post.title}</Heading>
				<DateFormatter date={post.createdAt} />
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
