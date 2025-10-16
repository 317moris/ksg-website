"use client";

import { Button, Drawer, HStack, Icon, Menu, Portal } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { RefObject } from "react";
import {
	Fa1,
	Fa2,
	Fa3,
	FaAngleDown,
	FaAngleRight,
	FaAngleUp,
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
import type {
	CourseProps,
	PageChildrenProps,
	PageProps,
} from "@/interfaces/pages";

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
].map((page) => {
	let children: PageChildrenProps[] | CourseProps[] | undefined = page.children;

	if (page.hasHome) {
		children = [{ name: "トップ", href: "", icon: FaHouse }, ...page.children];
	}

	page.children = children;
	return page;
});

export function PagesinHeader({
	contentRef,
}: {
	contentRef?: RefObject<HTMLDivElement | null>;
}) {
	const path = usePathname();
	const rootPath = path.split("/")[1] ?? "";

	return pages.map((page) => {
		const active = `/${rootPath}` === page.href;
		const hasMenu =
			page.children && (!page.hasHome || `/${rootPath}` === page.href);

		const button = (
			<Button
				key={page.href}
				variant="plain"
				color={{ base: "fg.muted", _hover: "fg" }}
				bg={{ _hover: "bg.muted" }}
				borderColor={{ base: "border", _hover: "border.emphasized" }}
				roundedBottom="none"
				borderWidth={0}
				borderBottomWidth="2px"
				{...(contentRef && {
					rounded: "md",
					borderWidth: "1px",
					borderBottomWidth: "1px",
					justifyContent: "space-between",
				})}
				{...(active && {
					color: { base: "green.fg", _hover: "fg" },
					borderColor: {
						base: "green.emphasized",
						_hover: "green.focusRing",
					},
					bg: { base: "green.subtle", _hover: "green.muted" },
				})}
				asChild={!hasMenu}
			>
				{hasMenu ? (
					<>
						<HStack gap="2">
							{page.icon && <page.icon />}
							{page.name}
						</HStack>
						<Icon size="xs">
							{contentRef ? <FaAngleUp /> : <FaAngleDown />}
						</Icon>
					</>
				) : (
					<NextLink href={page.href}>
						<HStack gap="2">
							{page.icon && <page.icon />}
							{page.name}
						</HStack>
						{page.hasHome && (
							<Icon size="xs">
								<FaAngleRight />
							</Icon>
						)}
					</NextLink>
				)}
			</Button>
		);

		if (hasMenu) {
			return (
				<Menu.Root
					key={page.href}
					positioning={{
						placement: contentRef ? "top-end" : "bottom-end",
					}}
				>
					<Menu.Trigger asChild>{button}</Menu.Trigger>
					<Portal container={contentRef}>
						<Menu.Positioner>
							<Menu.Content divideY="1px" divideColor="border.muted">
								{page.children?.map((child) => {
									const activeChild = path
										.split("/")[2]
										?.startsWith(child.href);
									const childPath = `${page.href}/${child.href}`;

									const item = (
										<Menu.Item
											key={contentRef ? undefined : child.href}
											color={
												activeChild
													? child.color
														? `${child.color}.fg`
														: "green.fg"
													: "fg.muted"
											}
											borderWidth={activeChild ? 1 : 0}
											asChild
											value={childPath}
										>
											<NextLink
												href={
													child.href.startsWith("/") ? child.href : childPath
												}
											>
												<child.icon />
												{child.name}
											</NextLink>
										</Menu.Item>
									);

									if (contentRef)
										return (
											<Drawer.ActionTrigger key={child.href} asChild>
												{item}
											</Drawer.ActionTrigger>
										);

									return item;
								})}
							</Menu.Content>
						</Menu.Positioner>
					</Portal>
				</Menu.Root>
			);
		}

		return button;
	});
}
