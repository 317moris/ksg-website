import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import { Footer } from "@/components/navigation/footer";
import { Header } from "@/components/navigation/header";
import { Provider } from "@/components/ui/provider";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
	variable: "--font-noto-sans-jp",
	subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "KSG",
	description: "埼玉県立越谷総合技術高等学校",
	icons: "/icon/kosho_rounded.png",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className={`${inter.variable} ${notoSansJP.variable} ${jetBrainsMono.variable}`}
			lang="ja"
			suppressHydrationWarning
		>
			<head>
				<meta name="darkreader-lock" />
			</head>
			<body>
				<Provider>
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
				</Provider>
			</body>
		</html>
	);
}
