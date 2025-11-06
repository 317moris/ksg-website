"use client";

import { Button, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaAward } from "react-icons/fa6";
import { TopCalendar } from "@/app/(dashboard)/_components/top-calendar";
import { rootPath } from "./_path";

const pages = [
	{
		name: "確認済みの資格",
		icon: FaAward,
		href: "/qualifications",
	},
];

export default function Page() {
	return (
		<Container py="8" spaceY="4">
			<Flex maxW="full" overflowX="auto" whiteSpace="">
				<TopCalendar />
			</Flex>
			<SimpleGrid columns={[2, 2, 3, 4]} gap="2">
				{pages.map((page) => (
					<Button key={page.href} asChild variant="surface" size="2xl">
						<NextLink href={`${rootPath}${page.href}`}>
							<page.icon /> {page.name}
						</NextLink>
					</Button>
				))}
			</SimpleGrid>
		</Container>
	);
}
