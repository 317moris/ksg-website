"use client";

import {
	Fa1,
	Fa2,
	Fa3,
	FaBook,
	FaBookBookmark,
	FaCalendar,
	FaComment,
	FaGraduationCap,
	FaHand,
	FaHandPointUp,
	FaHouse,
	FaInfo,
	FaMapPin,
	FaPenFancy,
	FaRoad,
	FaSeedling,
	FaTimeline,
	FaVolleyball,
} from "react-icons/fa6";
import { courses } from "@/const/course";
import type { PageChildrenProps, PageProps } from "@/interfaces/pages";

const _pages = [
	{
		name: "学校情報",
		href: "/info",
		icon: FaInfo,
		children: [
			{
				name: "校長より",
				href: "principal-message",
				icon: FaComment,
			},
			{
				name: "教育目標",
				href: "educational-goals",
				icon: FaBook,
			},
			{
				name: "沿革",
				href: "school-history",
				icon: FaTimeline,
			},
			{
				name: "アクセス",
				href: "/#access",
				icon: FaMapPin,
			},
			{
				name: "生徒の成長物語",
				href: "student-stories",
				icon: FaSeedling,
			},
			{
				name: "学校自己評価シート",
				href: "self-evaluation",
				icon: FaPenFancy,
			},
			{
				name: "生徒心得",
				href: "student-guidelines",
				icon: FaHandPointUp,
			},
			{
				name: "いじめ防止の取り組み",
				href: "anti-bullying-efforts",
				icon: FaHand,
			},
			{
				name: "教科書選定基本方針",
				href: "textbook-selection-policy",
				icon: FaBookBookmark,
			},
		],
	},
	{
		name: "行事予定",
		href: "/event",
		icon: FaCalendar,
	},
	{
		name: "学科",
		href: "/course",
		hasHome: true,
		icon: FaRoad,
		children: courses,
	},
	{
		name: "学年",
		href: "/grade",
		icon: FaGraduationCap,
		children: [
			{
				name: "1年生",
				href: "first",
				icon: Fa1,
			},
			{
				name: "2年生",
				href: "second",
				icon: Fa2,
			},
			{
				name: "3年生",
				href: "third",
				icon: Fa3,
			},
		],
	},
	{
		name: "部活動",
		href: "/club",
		icon: FaVolleyball,
	},
] satisfies PageProps[];

export const pages = addHometoPages(_pages);

export function addHometoPages(pages: PageProps[]) {
	return pages.map((page) => {
		let children: PageChildrenProps[] | undefined = page.children;

		if (page.hasHome) {
			// biome-ignore lint/style/noNonNullAssertion: <使わせろ>
			children = [
				{ name: "トップ", href: "", icon: FaHouse },
				...page.children!,
			];
		}

		page.children = children;
		return page;
	});
}
