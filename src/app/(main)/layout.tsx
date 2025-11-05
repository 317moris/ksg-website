import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { Footer } from "@/components/navigation/footer";
import { Header } from "@/components/navigation/header";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Flex
				w="full"
				bgColor="bg.inverted"
				color="fg.inverted"
				borderBottomWidth="1px"
				py="2"
			>
				<Container centerContent>
					<Text>
						このサイトは埼玉県立越谷総合技術高等学校の課題研究として製作中のWebサイトです。
					</Text>
					<HStack>
						<Link
							href="https://ksg-h.spec.ed.jp"
							target="_blank"
							color="green.muted"
							variant="underline"
						>
							公式HP
						</Link>
						<Link
							href="https://github.com/317moris/ksg-website"
							target="_blank"
							color="green.muted"
							variant="underline"
						>
							GitHub
						</Link>
					</HStack>
				</Container>
			</Flex>
			<Header />
			<Box minH="vh">{children}</Box>
			<Footer />
		</>
	);
}
