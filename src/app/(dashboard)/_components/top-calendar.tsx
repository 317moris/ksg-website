"use client";

import {
	Bleed,
	Button,
	ButtonGroup,
	Heading,
	Tag,
	Text,
	VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useId, useState } from "react";

type PlanType = {
	later: number;
	name: string;
	priority: "学校" | "学科" | "学年" | "部活" | "クラス" | "個人";
};

const plans: PlanType[] = [
	{
		later: 0, // デモ用の属性 実際はDate
		name: "課題研究発表会", // TODO: 配列化
		priority: "学科",
	},
	{
		later: 1,
		name: "球技大会",
		priority: "学校",
	},
	{
		later: 4,
		name: "情報処理検定",
		priority: "個人",
	},
	{
		later: 5,
		name: "帰宅部県大会",
		priority: "部活",
	},
	{
		later: 6,
		name: "クラス写真撮影",
		priority: "クラス",
	},
];

export function TopCalendar({
	sm,
	hideEmpty,
}: {
	sm?: boolean;
	hideEmpty?: boolean;
}) {
	const [open, setOpen] = useState(0);
	const id = useId();

	const today = new Date();
	const dates = new Array(28)
		.fill(0)
		.map((_, i) => plans.find((plan) => plan.later === i));

	return dates.map((plan, i) => {
		if (hideEmpty && !plan) return null;

		const date = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate() + i,
		);
		const buttonId = `${id}-calendar-${date.getMonth() + 1}-${date.getDate()}`;

		const buttons = (
			<Button
				id={buttonId}
				key={!sm ? date.toISOString() : undefined}
				whiteSpace={open === i ? undefined : "nowrap"}
				flexDir="column"
				h="full"
				variant="surface"
				alignItems="start"
				justifyContent="start"
				px="4"
				w="full"
				minW="28"
				maxW={open === i ? "md" : "28"}
				onClick={() => setOpen(i)}
				overflow="hidden"
				colorPalette={open === i ? "green" : undefined}
				transition="all"
				transitionDuration="moderate"
				asChild
			>
				<NextLink href={`/dashboard#${buttonId}`} replace>
					<VStack align="start" my="4" gap="4">
						<VStack align="start" gap="0.5" w="full">
							<Heading
								size="5xl"
								visibility={
									date.getDate() === 1 || i === 0 ? "visible" : "hidden"
								}
							>
								{date.getMonth() + 1}
							</Heading>
							<Heading fontFamily="mono" size="4xl">
								{date.getDate()}
							</Heading>
						</VStack>
						{plan ? (
							<>
								<Heading>{plan?.name}</Heading>
								<Tag.Root>
									<Tag.Label>{plan?.priority}</Tag.Label>{" "}
								</Tag.Root>
							</>
						) : (
							<Text
								color="fg.subtle"
								fontFamily="mono"
								fontStyle="italic"
								fontSize="sm"
								fontWeight="bold"
							>
								Empty
							</Text>
						)}
					</VStack>
					<Bleed
						hidden={open === i}
						pos="absolute"
						gradientFrom="transparent"
						gradientTo="blackAlpha.50"
						bgGradient="to-r"
						right="0"
						h="full"
						w="1/12"
					/>
				</NextLink>
			</Button>
		);

		if (!sm)
			return (
				<ButtonGroup key={date.toISOString()} attached rounded="lg">
					{buttons}
				</ButtonGroup>
			);

		return buttons;
	});
}
