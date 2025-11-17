"use client";

import {
	Bleed,
	Box,
	Button,
	Heading,
	LinkOverlay,
	Presence,
	Span,
	Tag,
	Text,
	VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { type RefObject, useId, useState } from "react";

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
		later: 25,
		name: "帰宅部県大会",
		priority: "部活",
	},
	{
		later: 27,
		name: "クラス写真撮影",
		priority: "クラス",
	},
];

export function TopCalendar({
	ref,
	hideEmpty,
}: {
	ref: RefObject<HTMLDivElement | null>;
	hideEmpty?: boolean;
}) {
	const [open, setOpen] = useState(0);
	const id = useId();

	const today = new Date();
	const dates = new Array(28).fill(0).map((_, i) => ({
		plans: plans.find((plan) => plan.later === i),
		key: i,
	}));

	let prevMonth = today.getMonth() - 1;

	return dates.map((plan, i) => {
		if (hideEmpty && !plan.plans) return null;
		const date = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate() + i,
		);
		const buttonId = `${id}-calendar-${date.getMonth() + 1}-${date.getDate()}`;

		let showMonth = false;
		if (date.getMonth() !== prevMonth) {
			showMonth = true;
			prevMonth = date.getMonth();
		}

		const buttons = (
			<Button
				rounded="none"
				key={plan.key}
				whiteSpace={open === i ? undefined : "nowrap"}
				flexDir="column"
				h="full"
				variant="subtle"
				alignItems="start"
				justifyContent="start"
				px="4"
				w="full"
				minW="28"
				maxW={open === i ? "md" : "28"}
				onClick={() => {
					setOpen(i);
					const buttonNode = ref.current?.querySelectorAll("button")[i];
					buttonNode?.scrollIntoView({
						behavior: "smooth",
						inline: "nearest",
					});
				}}
				overflow="hidden"
				colorPalette={open === i ? "green" : undefined}
				transition="all"
				transitionDuration="moderate"
			>
				<VStack h="full" justify="space-between" pt="8" gap="4" w="full">
					<VStack align="start" gap="4" w="full">
						<VStack align="start" gap="4" w="full">
							<Text visibility={showMonth ? "visible" : "hidden"} as="h2">
								<Span fontSize="3xl" fontFamily="mono">
									{date.getMonth() + 1}
								</Span>
								月
							</Text>
							<LinkOverlay asChild>
								<NextLink href={`/dashboard#${buttonId}`} replace>
									<Text
										as="h3"
										fontFamily="mono"
										fontWeight="semibold"
										fontSize="4xl"
									>
										{date.getDate()}
									</Text>
								</NextLink>
							</LinkOverlay>
						</VStack>
						{plan.plans ? (
							<>
								<Heading as="h4">{plan.plans.name}</Heading>
								<Tag.Root>
									<Tag.Label>{plan.plans.priority}</Tag.Label>{" "}
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
					<Box w="full" pos="sticky" bottom="0">
						<Box
							py="4"
							gradientFrom="transparent"
							gradientTo="currentBg"
							bgGradient="to-b"
						>
							<Presence
								present={open === i}
								_open={{
									animationName: "fade-in",
									animationDuration: "moderate",
								}}
								_closed={{
									animationName: "fade-out",
									animationDuration: "moderate",
								}}
							>
								<Button w="full" asChild>
									<NextLink href={`/calendar/${date.toISOString()}`}>
										詳細
									</NextLink>
								</Button>
							</Presence>
						</Box>
					</Box>
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
			</Button>
		);

		return buttons;
	});
}
