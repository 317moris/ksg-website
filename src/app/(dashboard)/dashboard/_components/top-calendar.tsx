"use client";

import {
	Bleed,
	Box,
	Button,
	Heading,
	LinkOverlay,
	Presence,
	Span,
	Text,
	VStack,
} from "@chakra-ui/react";
import { differenceInDays } from "date-fns";
import NextLink from "next/link";
import { Fragment, type RefObject, useId, useState } from "react";
import _plans from "../../calendar/_data/plans.json";

// type PlanType = {
// 	later: number;
// 	name: string;
// 	priority: "学校" | "学科" | "学年" | "部活" | "クラス" | "個人";
// };

export function TopCalendar({
	ref,
	hideEmpty,
}: {
	ref: RefObject<HTMLDivElement | null>;
	hideEmpty?: boolean;
}) {
	const [open, setOpen] = useState(0);
	const id = useId();

	const plans = _plans.map((plan) => {
		const { date, endDate, ...rest } = plan;

		return {
			date: new Date(date),
			endDate: endDate ? new Date(endDate) : undefined,
			...rest,
		};
	});

	const today = new Date();
	const dates = new Array(28).fill(0).map((_, i) => {
		const date = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate() + i,
		);

		return {
			date,
			plans: plans.filter(
				(plan) =>
					differenceInDays(date, plan.date) === 0 ||
					(plan.endDate
						? // biome-ignore lint/style/noNonNullAssertion: <????????????????????????????>
							differenceInDays(date, plan.endDate!) === 0
						: false),
			),
			key: i,
		};
	});

	let prevMonth = today.getMonth() - 1;

	let buttonIndex = 0;
	return dates.map((plan, i) => {
		if (hideEmpty && !plan.plans.length) return null;
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
				maxW={open === i ? "1/2" : "28"}
				onClick={() => {
					setOpen(i);
					const buttonNode =
						ref.current?.querySelectorAll("button")[buttonIndex];
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
										<Span fontSize="xl">
											(
											{
												["日", "月", "火", "水", "木", "金", "土"][
													date.getDay()
												]
											}
											)
										</Span>
									</Text>
								</NextLink>
							</LinkOverlay>
						</VStack>
						{plan.plans ? (
							plan.plans.map((plan) => (
								<Fragment key={`${plan.date}-${plan.name}`}>
									<Heading as="h4">{plan.name}</Heading>
									{/* <Tag.Root>
										<Tag.Label>{plan.plans.priority}</Tag.Label>{" "}
									</Tag.Root> */}
								</Fragment>
							))
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

		buttonIndex += 1;

		return buttons;
	});
}
