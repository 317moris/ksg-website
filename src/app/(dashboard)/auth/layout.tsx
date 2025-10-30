import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "ログイン - KSG",
	icons: "/icon/kosho_rounded.png",
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
