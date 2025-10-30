import { Box, Container, Text } from "@chakra-ui/react";
import { Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import { Header } from "./_components/navigation/header";

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="ja"
			suppressHydrationWarning
			className={`${inter.variable} ${notoSansJP.variable} ${jetBrainsMono.variable}`}
		>
			<head>
				<meta name="darkreader-lock" />
			</head>
			<body>
				<Provider>
					<Box
						bg="bg.inverted"
						borderBottomWidth="1px"
						borderColor="border.inverted"
						py="2"
					>
						<Container centerContent>
							<Text color="fg.inverted">
								このページの内容は架空であり、実際とは異なります。
							</Text>
						</Container>
					</Box>
					<Header />
					{children}
				</Provider>
			</body>
		</html>
	);
}
