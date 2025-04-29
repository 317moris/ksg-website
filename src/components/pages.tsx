"use client";

import { courses } from "@/const/course";
import type { PageProps } from "@/interfaces/pages";
import { Button, type ButtonProps, Menu, Portal } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useId } from "react";
import { FaCalendar, FaInfo, FaRoad } from "react-icons/fa6";
import { Tooltip } from "./ui/tooltip";

const pages: PageProps[] = [
	{
		name: "学校情報",
		description: "校長より, 教育目標, 沿革",
		href: "/info",
		icon: FaInfo,
	},
	{
		name: "行事予定",
		description: "年間の行事予定",
		href: "/event",
		icon: FaCalendar,
	},
	{
		name: "学科",
		description: "各学科の詳細",
		href: "/course",
		icon: FaRoad,
		children: courses,
	},
];

export function Pages(props: ButtonProps) {
	const path = usePathname();
	const triggerId = useId();

	return pages.map((page) => {
		let isActive = false;
		if (
			page.href === path ||
			(page.href !== "/" && path.split("/")[1] === page.href.slice(1))
		)
			isActive = true;

		if (page.children && isActive) {
			return (
				<Menu.Root key={page.name} ids={{ trigger: triggerId }}>
					<Tooltip
						content={page.description}
						showArrow
						ids={{ trigger: triggerId }}
					>
						<Menu.Trigger asChild>
							<Button
								key={page.name}
								variant={isActive ? "subtle" : "outline"}
								color={isActive ? "fg" : "fg.subtle"}
								{...props}
							>
								<page.icon />
								{page.name}
							</Button>
						</Menu.Trigger>
					</Tooltip>
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
										<Tooltip
											key={child.name}
											positioning={{
												placement: "right",
											}}
											showArrow
											content={child.excerpt}
										>
											<Menu.Item
												color={
													isActiveChild
														? child.color
															? `${child.color}.fg`
															: "fg"
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
										</Tooltip>
									);
								})}
							</Menu.Content>
						</Menu.Positioner>
					</Portal>
				</Menu.Root>
			);
		}

		return (
			<Tooltip key={page.name} content={page.description} showArrow>
				<Button
					variant={isActive ? "subtle" : "outline"}
					asChild
					color={isActive ? "fg" : "fg.subtle"}
					{...props}
				>
					<NextLink href={page.href}>
						<page.icon /> {page.name}
					</NextLink>
				</Button>
			</Tooltip>
		);
	});
}
