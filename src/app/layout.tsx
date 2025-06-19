import { Container, Flex, HStack, Link, Text, VStack } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/header";
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
					<Header />
					<Flex
						w="full"
						bgColor="bg.inverted"
						color="fg.inverted"
						borderBottomWidth={1}
						py="2"
					>
						<Container>
							<VStack gap="0">
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
							</VStack>
						</Container>
					</Flex>
					{children}
				</Provider>
			</body>
		</html>
	);
}
