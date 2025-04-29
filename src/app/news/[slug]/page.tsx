import { Prose } from "@/components/ui/prose-custom";
import type { Params } from "@/interfaces/params";
import { getPostBySlug } from "@/lib/api";
import { Container, Image } from "@chakra-ui/react";
import NextImage from "next/image";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";

export default async function Page(props: Params) {
	const params = await props.params;
	const post = await getPostBySlug(params.slug);

	if (!post) return notFound();

	return (
		<Container as="main" maxW="4xl">
			<Image asChild w="full" rounded="lg">
				<NextImage
					src={post.coverImage}
					alt={post.title}
					width={1280}
					height={720}
				/>
			</Image>
			<Prose>
				<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[remarkRehype]}>
					{post.content}
				</Markdown>
			</Prose>
		</Container>
	);
}
