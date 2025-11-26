import { RecentPost } from "@/interfaces/post";
import {
	Bleed,
	Button,
	HStack,
	Span,
	StackProps,
	Text,
	VStack,
} from "@chakra-ui/react";
import { MicroCMSListResponse } from "microcms-js-sdk";
import NextLink from "next/link";

export default function PrevNextPost({
	previousPost,
	nextPost,
	...rest
}: {
	previousPost?: MicroCMSListResponse<RecentPost>;
	nextPost?: MicroCMSListResponse<RecentPost>;
} & StackProps) {
	return (
		<HStack justify="space-between" {...rest}>
			{previousPost?.totalCount ? (
				<Button maxW="md" flex={1} h="fit" py="4" asChild>
					<NextLink href={`/news/${previousPost.contents[0].id}`}>
						前のニュース
						<br />
						<Span overflow="hidden" textOverflow="ellipsis">
							{previousPost.contents[0].title}
						</Span>
					</NextLink>
				</Button>
			) : (
				<Bleed />
			)}
			{nextPost?.totalCount ? (
				<Button maxW="md" flex={1} h="fit" py="4" asChild>
					<VStack asChild align="start">
						<NextLink href={`/news/${nextPost.contents[0].id}`}>
							次のニュース
							<Span textOverflow="ellipsis">{nextPost.contents[0].title}</Span>
							{/* <Span overflow="hidden" textOverflow="ellipsis">
								ああああああああああああああああああ
							</Span> */}
						</NextLink>
					</VStack>
				</Button>
			) : (
				<Bleed />
			)}
		</HStack>
	);
}
