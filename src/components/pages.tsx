"use client";

import { Button, Menu, Portal } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import {
	FaCalendar,
	FaCheck,
	FaGlasses,
	FaInfo,
	FaMicrochip,
	FaPlug,
	FaReceipt,
	FaUtensils,
} from "react-icons/fa6";
import NextLink from "next/link";

type PageProps = {
	name: string;
	description: string;
	href: string;
	icon: IconType;
	children?: {
		name: string;
		href: string;
		icon: IconType;
	}[];
};

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
		icon: FaInfo,
		children: [
			{
				name: "情報技術科",
				href: "info-tech",
				icon: FaMicrochip,
			},
			{
				name: "情報処理科",
				href: "info-processing",
				icon: FaReceipt,
			},
			{
				name: "食物調理科",
				href: "culinary",
				icon: FaUtensils,
			},
			{
				name: "服飾デザイン科",
				href: "fashion-design",
				icon: FaGlasses,
			},
			{
				name: "電子機械科",
				href: "electro-mechanics",
				icon: FaPlug,
			},
		],
	},
];

export function Pages() {
	const path = usePathname();

	return pages.map((page) => {
		let isActive = false;
		if (
			page.href === path ||
			(page.href !== "/" && path.split("/")[1] === page.href.slice(1))
		)
			isActive = true;

		if (page.children)
			return (
				<Menu.Root key={page.name}>
					<Menu.Trigger asChild>
						<Button
							key={page.name}
							variant={isActive ? "subtle" : "ghost"}
							color={isActive ? "fg" : "fg.subtle"}
						>
							<page.icon />
							{page.name}
						</Button>
					</Menu.Trigger>
					<Portal>
						<Menu.Positioner>
							<Menu.Content>
								<Menu.RadioItemGroup value={path}>
									{page.children.map((child) => {
										let isActiveChild = false;
										const childPath = `${page.href}/${child.href}`;

										console.log(childPath, path);
										if (
											childPath === path ||
											(childPath !== "/" && path.split("/")[2] === childPath)
										)
											isActiveChild = true;

										return (
											<Menu.RadioItem
												color={isActiveChild ? "fg" : "fg.muted"}
												borderWidth={isActiveChild ? 1 : 0}
												asChild
												key={child.name}
												value={childPath}
											>
												<NextLink href={`${page.href}/${child.href}`}>
													<Menu.ItemIndicator />
													{child.name}
												</NextLink>
											</Menu.RadioItem>
										);
									})}
								</Menu.RadioItemGroup>
							</Menu.Content>
						</Menu.Positioner>
					</Portal>
				</Menu.Root>
			);

		return (
			<Button
				key={page.name}
				variant={isActive ? "subtle" : "ghost"}
				asChild
				color={isActive ? "fg" : "fg.subtle"}
			>
				<NextLink href={page.href}>
					<page.icon /> {page.name}
				</NextLink>
			</Button>
		);
	});
}
