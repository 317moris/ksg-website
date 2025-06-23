"use client";

import { Button, HStack, Menu, Portal } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { Dispatch, RefObject, SetStateAction } from "react";
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
	FaHouse,
	FaInfo,
	FaLocationPin,
	FaPenFancy,
	FaRoad,
	FaSeedling,
	FaTimeline,
	FaVolleyball,
} from "react-icons/fa6";
import { courses } from "@/const/course";
import type { PageChildrenProps, PageProps } from "@/interfaces/pages";

export const pages: PageProps[] = [
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

export function Pages({
	drawer,
	setOpen,
	contentRef,
}: {
	drawer: boolean;
	setOpen?: Dispatch<SetStateAction<boolean>>;
	contentRef?: RefObject<HTMLDivElement | null>;
}) {
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
					variant={isActive ? "surface" : "outline"}
					asChild
					color={isActive ? "green.fg" : "fg.subtle"}
					justifyContent={drawer ? "space-between" : "center"}
					{...(setOpen && { onClick: () => setOpen(false) })}
				>
					<NextLink href={page.href}>
						<HStack>
							<page.icon /> {page.name}
						</HStack>
						{page.hasHome ? <FaAngleDown /> : null}
					</NextLink>
				</Button>
			);

		if (!page.children) return;

		let children: PageChildrenProps[];
		if (page.hasHome) {
			children = [{ name: "トップ", href: "", icon: FaHouse }].concat(
				page.children,
			);
		} else {
			children = page.children;
		}

		return (
			<Menu.Root
				key={page.name}
				positioning={{ placement: drawer ? "bottom-end" : undefined }}
			>
				<Menu.Trigger asChild>
					<Button
						key={page.name}
						variant={isActive ? "surface" : "outline"}
						color={isActive ? "green.fg" : "fg.subtle"}
						justifyContent={drawer ? "space-between" : "center"}
					>
						<HStack>
							<page.icon />
							{page.name}
						</HStack>
						<FaCaretDown />
					</Button>
				</Menu.Trigger>
				<Portal container={contentRef}>
					<Menu.Positioner>
						<Menu.Content>
							{children.map((child) => {
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
										{...(setOpen && { onClick: () => setOpen(false) })}
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
