import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { SideBar } from "@/components/sidebar";
import {
	Box,
	Container,
	Flex,
	Grid,
	GridItem,
	HStack,
	Show,
	VStack,
} from "@chakra-ui/react";
import { Links } from "@/components/header/links";

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
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${notoSansJP.variable} ${jetBrainsMono.variable}`}
			>
				<Provider>
					<Header />
					<Container maxW="8xl" mt={4}>
						<Grid
							templateColumns="repeat(6, 1fr)"
							gap={4}
							display={{ lgDown: "none", md: "grid" }}
						>
							<GridItem
								colSpan={1}
								pos="sticky"
								top="57px"
								overflowY="auto"
								overscrollBehavior="contain"
							>
								<SideBar />
							</GridItem>
							<GridItem colSpan={5}>{children}</GridItem>
						</Grid>
						<VStack display={{ lgDown: "block", md: "none" }}>
							<HStack overflowX="auto">
								<Links />
							</HStack>
							{children}
						</VStack>
					</Container>
				</Provider>
			</body>
		</html>
	);
}
