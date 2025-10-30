"use client";

import { Flex, Heading, Span, Tag, Text } from "@chakra-ui/react";

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

export function TopCalendar() {
	const today = new Date();
	const dates = new Array(7)
		.fill(0)
		.map((_, i) => plans.find((plan) => plan.later === i) || null);

	return dates.map((plan, i) => {
		const date = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate() + i,
		);

		return (
			<Flex key={date.toISOString()}>
				<Heading fontFamily="mono" size="xl">
					<Span fontSize="md">{date.getMonth() + 1} /</Span> {date.getDate()}
				</Heading>
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
			</Flex>
		);
	});
}
