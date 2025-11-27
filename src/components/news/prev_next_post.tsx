import {
	Button,
	Field,
	SimpleGrid,
	Span,
	type StackProps,
	VStack,
} from "@chakra-ui/react";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import NextLink from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import type { RecentPost } from "@/interfaces/post";

export default function PrevNextPost({
	previousPost,
	nextPost,
	...rest
}: {
	previousPost?: MicroCMSListResponse<RecentPost>;
	nextPost?: MicroCMSListResponse<RecentPost>;
} & StackProps) {
	return (
		// 		 what the heck is this
		// 		型 'number | String | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto" | readonly NonNullable<Columns<String | Number> | undefined>[] | (AnyString | ... 3 more ... | undefined)[] | { ...; }' を型 'ConditionalValue<number> | undefined' に割り当てることはできません。
		//   型 'String' を型 'ConditionalValue<number> | undefined' に割り当てることはできません。
		//     型 'String' には 型 '(number | null)[]' からの次のプロパティがありません: pop, push, join, reverse、27 など。ts(2322)
		// simple-grid.d.ts(11, 5): 予期された型は、型 'IntrinsicAttributes & SimpleGridProps & RefAttributes<HTMLDivElement>' に対してここで宣言されたプロパティ 'columns' から取得されています
		<SimpleGrid columns={2} gap="4" {...rest}>
			<Field.Root maxW="md" flex={1} alignItems="start">
				<Field.Label>前のニュース</Field.Label>
				<Button
					variant="surface"
					justifyContent="start"
					w="full"
					h="full"
					textAlign="start"
					asChild
					{...(!previousPost?.totalCount && {
						asChild: false,
						disabled: true,
					})}
				>
					{previousPost?.totalCount ? (
						<NextLink href={`/news/${previousPost.contents[0].id}`}>
							<FaArrowLeft />
							<Span overflow="hidden" textOverflow="ellipsis">
								{previousPost.contents[0].title}
								<br />
								{previousPost.contents[0].subtitle}
							</Span>
						</NextLink>
					) : (
						<Span whiteSpace="normal">最古のニュースに辿り着きました</Span>
					)}
				</Button>
			</Field.Root>
			<VStack align="end">
				<Field.Root maxW="md" flex={1} alignItems="end">
					<Field.Label>次のニュース</Field.Label>
					<Button
						variant="surface"
						justifyContent="end"
						w="full"
						h="full"
						textAlign="end"
						asChild
						{...(!nextPost?.totalCount && {
							asChild: false,
							disabled: true,
						})}
					>
						{nextPost?.totalCount ? (
							<NextLink href={`/news/${nextPost.contents[0].id}`}>
								<Span overflow="hidden" textOverflow="ellipsis">
									{nextPost.contents[0].title}
									<br />
									{nextPost.contents[0].subtitle}
								</Span>
								<FaArrowRight />
							</NextLink>
						) : (
							"最新のニュースに辿り着きました"
						)}
					</Button>
				</Field.Root>
			</VStack>
		</SimpleGrid>
	);
}
