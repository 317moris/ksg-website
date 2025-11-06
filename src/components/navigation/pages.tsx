"use client";

import { Button, Drawer, HStack, Icon, Menu, Portal } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { RefObject } from "react";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa6";
import type { PageProps } from "@/interfaces/pages";

export function PagesinNavigation({
	pages,
	contentRef,
}: {
	pages: PageProps[];
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
				key={!hasMenu && contentRef ? undefined : page.href}
				variant="plain"
				color={{ base: "fg.muted", _hover: "fg", _open: "fg" }}
				{...(!contentRef && {
					px: "0",
					borderBottomColor: {
						_hover: "border.emphasized",
						_open: "border.emphasized",
					},
					roundedBottom: "none",
					borderWidth: "0",
					borderYWidth: "2px",
				})}
				{...(contentRef && {
					bg: { _hover: "bg.muted", _open: "bg.muted" },
					borderColor: {
						base: "border",
						_hover: "border.emphasized",
						_open: "border.emphasized",
					},
					borderWidth: "1px",
					justifyContent: "space-between",
				})}
				{...(active && {
					color: { base: "green.fg", _hover: "fg", _open: "fg" },
					...(!contentRef && {
						borderBottomColor: {
							base: "green.emphasized",
							_hover: "green.focusRing",
							_open: "green.focusRing",
						},
					}),
					...(contentRef && {
						bg: {
							base: "green.subtle/70",
							_hover: "green.subtle",
							_open: "green.subtle",
						},
					}),
				})}
				asChild={!hasMenu}
			>
				{hasMenu ? (
					<>
						<HStack gap="2" fontSize="sm">
							{page.icon && (
								<Icon size="sm">
									<page.icon />
								</Icon>
							)}
							{page.name}
						</HStack>
						<Icon size="sm">
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
							<Icon size="sm">
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
									const childPath = `${page.href}/${child.href}`;
									const activeChild = child.href
										? path.startsWith(childPath)
										: path === page.href;

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

		if (contentRef)
			return (
				<Drawer.ActionTrigger asChild key={page.href}>
					{button}
				</Drawer.ActionTrigger>
			);
		return button;
	});
}
