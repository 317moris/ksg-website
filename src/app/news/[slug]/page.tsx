import { Prose } from "@/components/ui/prose";
import type { Params } from "@/interfaces/params";
import { getPostBySlug } from "@/lib/api";
import { Container, Image } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import NextImage from "next/image";

export default async function Page(props: Params) {
	const params = await props.params;
	const post = await getPostBySlug(params.slug);

	if (!post) return notFound();

	return (
		<Container as="main" maxW="4xl">
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
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
			<Prose dangerouslySetInnerHTML={{ __html: post.content }} />
		</Container>
	);
}
