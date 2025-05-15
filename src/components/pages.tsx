"use client";

import { courses } from "@/const/course";
import type { PageProps } from "@/interfaces/pages";
import { Button, type ButtonProps, Menu, Portal } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
	Fa1,
	Fa2,
	Fa3,
	FaAngleDown,
	FaBook,
	FaBookBookmark,
	FaCalendar,
	FaCaretDown,
	FaComment,
	FaGraduationCap,
	FaHand,
	FaHandPointUp,
	FaInfo,
	FaLocationPin,
	FaPenFancy,
	FaRoad,
	FaSeedling,
	FaTimeline,
	FaVolleyball,
} from "react-icons/fa6";

const pages: PageProps[] = [
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
				href: "location",
				icon: FaLocationPin,
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
];

export function Pages(props: ButtonProps) {
	const path = usePathname();

	return pages.map((page) => {
		let isActive = false;
		if (
			page.href === path ||
			(page.href !== "/" && path.split("/")[1] === page.href.slice(1))
		)
			isActive = true;

		if (!page.children || (page.hasHome && !isActive))
			return (
				<Button
					key={page.name}
					variant={isActive ? "subtle" : "outline"}
					asChild
					color={isActive ? "fg" : "fg.subtle"}
					{...props}
				>
					<NextLink href={page.href}>
						<page.icon /> {page.name} {page.hasHome ? <FaAngleDown /> : null}
					</NextLink>
				</Button>
			);

		if (!page.children) return;

		return (
			<Menu.Root key={page.name}>
				<Menu.Trigger asChild>
					<Button
						key={page.name}
						variant={isActive ? "subtle" : "outline"}
						color={isActive ? "fg" : "fg.subtle"}
						{...props}
					>
						<page.icon />
						{page.name}
						<FaCaretDown />
					</Button>
				</Menu.Trigger>
				<Portal>
					<Menu.Positioner>
						<Menu.Content>
							{page.children.map((child) => {
								let isActiveChild = false;
								const childPath = `${page.href}/${child.href}`;

								if (
									childPath === path ||
									(childPath !== "/" && path.split("/")[2] === childPath)
								)
									isActiveChild = true;

								return (
									<Menu.Item
										key={child.name}
										color={
											isActiveChild
												? child.color
													? `${child.color}.fg`
													: "green.fg"
												: "fg.muted"
										}
										borderWidth={isActiveChild ? 1 : 0}
										asChild
										value={childPath}
									>
										<NextLink href={`${page.href}/${child.href}`}>
											<child.icon />
											{child.name}
										</NextLink>
									</Menu.Item>
								);
							})}
						</Menu.Content>
					</Menu.Positioner>
				</Portal>
			</Menu.Root>
		);
	});
}
