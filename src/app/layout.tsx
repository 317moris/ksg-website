import { Header } from "@/components/header";
import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";

export const runtime = "edge";

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
	icons: {
		icon: [
			{ url: "/icon/kosho_orig.png" },
			{
				url: "/icon/kosho_orig_white.png",
				media: "(prefers-color-scheme: dark)",
			},
		],
	},
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
			<body>
				<Provider>
					<Header />
					{children}
				</Provider>
			</body>
		</html>
	);
}
