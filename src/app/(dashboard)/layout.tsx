import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
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
	title: "ログイン - KSG",
	icons: "/icon/kosho_rounded.png",
};

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
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
