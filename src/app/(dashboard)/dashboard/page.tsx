import { Button, Container, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaAward, FaCalendar } from "react-icons/fa6";
import { Aria } from "@/components/ui/aria";
import { TopCalendarWrap } from "./_components/top-calendar-wrap";
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
			<Aria title="予定表" icon={<FaCalendar />}>
				<TopCalendarWrap />
			</Aria>
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
