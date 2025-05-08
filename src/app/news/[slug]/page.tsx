import { Prose } from "@/components/ui/prose";
import type { Params } from "@/interfaces/params";
import { getPostBySlug } from "@/lib/api";
import { Container } from "@chakra-ui/react";
import { notFound } from "next/navigation";

export default async function Page(props: Params) {
	const params = await props.params;
	const post = await getPostBySlug(params.slug);

	if (!post) return notFound();

	return (
		<Container as="main" maxW="4xl">
			{/* <Image asChild w="full" rounded="lg">
				<NextImage
					src={post.coverImage}
					alt={post.title}
					width={1280}
					height={720}
				/>
			</Image> */}
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
			<Prose dangerouslySetInnerHTML={{ __html: post.content }} />
		</Container>
	);
}
