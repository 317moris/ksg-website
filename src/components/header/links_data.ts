import type { IconType } from "react-icons";
import {
	FaCalendar,
	FaCodeBranch,
	FaGraduationCap,
	FaHouse,
	FaInfo,
	FaMapLocation,
	FaRoute,
	FaSchool,
	FaVolleyball,
} from "react-icons/fa6";

type Links = {
	name: string;
	href: string;
	icon: IconType;
};

export const links: Links[] = [
	{
		name: "トップ",
		href: "/",
		icon: FaHouse,
	},
	{
		name: "学校情報",
		href: "info",
		icon: FaInfo,
	},
	{
		name: "学科",
		href: "/departments",
		icon: FaCodeBranch,
	},
	{
		name: "学年",
		href: "/grades",
		icon: FaGraduationCap,
	},
	{
		name: "行事予定",
		href: "/events",
		icon: FaCalendar,
	},
	{
		name: "進路",
		href: "/career",
		icon: FaRoute,
	},
	{
		name: "部活動",
		href: "/clubs",
		icon: FaVolleyball,
	},
	{
		name: "アクセス",
		href: "/access",
		icon: FaMapLocation,
	},
	{
		name: "中学生の皆さんへ",
		href: "/for-junior-high",
		icon: FaSchool,
	},
];
