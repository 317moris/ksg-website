import {
	DotGothic16,
	IBM_Plex_Sans_JP,
	Kaisei_Decol,
	Klee_One,
	Noto_Sans_JP,
	Zen_Kurenaido,
} from "next/font/google";
import {
	FaBriefcase,
	FaGlasses,
	FaMicrochip,
	FaPlug,
	FaReceipt,
	FaUtensils,
} from "react-icons/fa6";
import type { CourseProps } from "@/interfaces/pages";

const dotGothic16 = DotGothic16({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-dot-gothic-16",
});
const notoSansJP = Noto_Sans_JP({
	subsets: ["latin"],
	variable: "--font-noto-sans-jp",
});
const kleeOne = Klee_One({
	subsets: ["latin"],
	variable: "--font-klee-one",
	weight: ["400", "600"],
});
const ibmPlexSansJP = IBM_Plex_Sans_JP({
	subsets: ["latin"],
	variable: "--font-ibm-plex-sans-jp",
	weight: ["400", "600"],
});
const kaiseiDecol = Kaisei_Decol({
	subsets: ["latin"],
	variable: "--font-kaisei-decol",
	weight: ["400", "700"],
});
const zenKurenaido = Zen_Kurenaido({
	subsets: ["latin"],
	variable: "--font-zen-kurenaido",
	weight: ["400"],
});

const fonts = {
	dotGothic16: {
		font: dotGothic16,
		variable: "--font-dot-gothic-16",
	},
	notoSansJP: {
		font: notoSansJP,
		variable: "--font-noto-sans-jp",
	},
	kleeOne: {
		font: kleeOne,
		variable: "--font-klee-one",
	},
	ibmPlexSansJP: {
		font: ibmPlexSansJP,
		variable: "--font-ibm-plex-sans-jp",
	},
	kaiseiDecol: {
		font: kaiseiDecol,
		variable: "--font-kaisei-decol",
	},
	zenKurenaido: {
		font: zenKurenaido,
		variable: "--font-zen-kurenaido",
	},
};

export const courses: CourseProps[] = [
	{
		name: "電子機械科",
		description: "各種ロボットやコンピュータ制御の工作機械",
		href: "electro-mechanics",
		icon: FaPlug,
		color: "blue",
		coverImage: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/95/65/big",
		font: fonts.dotGothic16,
	},
	{
		name: "情報技術科",
		description: "ハードウェア、ソフトウェア、ネットワーク",
		href: "information-technology",
		icon: FaMicrochip,
		color: "cyan",
		coverImage: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/95/12223/big",
		font: fonts.notoSansJP,
	},
	{
		name: "流通経済科",
		description: "マーケティング、簿記会計、情報処理、経済、マナー指導",
		href: "business",
		icon: FaBriefcase,
		color: "green",
		coverImage: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/95/9265/big",
		font: fonts.kleeOne,
	},
	{
		name: "情報処理科",
		description: "コンピューター実務、簿記、マナー指導",
		href: "information-processing",
		icon: FaReceipt,
		color: "teal",
		coverImage: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/95/10003/big",
		font: fonts.ibmPlexSansJP,
	},
	{
		name: "服飾デザイン科",
		description: "ファッションデザイン、ファッション造形、服飾手芸",
		href: "fashion-design",
		icon: FaGlasses,
		color: "red",
		coverImage: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/95/7762/big",
		font: fonts.kaiseiDecol,
	},
	{
		name: "食物調理科",
		description: "栄養、食品、食文化、公衆衛生、食品衛生",
		href: "culinary-arts",
		icon: FaUtensils,
		color: "orange",
		coverImage: "https://ksg-h.spec.ed.jp/wysiwyg/image/download/95/11351/big",
		font: fonts.zenKurenaido,
	},
];
