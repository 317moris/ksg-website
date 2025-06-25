import { Skeleton } from "@chakra-ui/react";
import { Suspense } from "react";
import { AuthorsMenu } from "@/components/authors";
import { SearchMenu } from "@/components/news/search-menu";
import { MainContainer } from "@/components/ui/main-container";
import { getAuthors } from "@/lib/api";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const authors = getAuthors();

	return (
		<MainContainer>
			<Suspense fallback={<Skeleton h="sizes.10" w="full" />}>
				<AuthorsMenu authors={authors} />
			</Suspense>
			<SearchMenu />

			{children}
		</MainContainer>
	);
}
