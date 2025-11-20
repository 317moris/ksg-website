"use client";

import {
	Button,
	ClientOnly,
	Container,
	FormatNumber,
	List,
	SimpleGrid,
	Table,
	Text,
	VStack,
} from "@chakra-ui/react";
import { differenceInDays, format } from "date-fns";
import NextLink from "next/link";
import { useState } from "react";
import { Aria } from "@/components/ui/aria";
import Loading from "../loading";
import _plans from "./_data/plans.json";

export default function Page() {
	const [_today, _setToday] = useState(new Date());
	const today = new Date(
		_today.getFullYear(),
		_today.getMonth(),
		_today.getDate(),
	);

	const dateNums = differenceInDays(
		new Date(today.getFullYear() + 1, 5, 1),
		new Date(today.getFullYear(), 3, 1),
	);
	const _dates = new Array(dateNums)
		.fill(0)
		.map((_, i) => ({ date: new Date(today.getFullYear(), 3, i + 1), key: i }));

	const dates: {
		year: number;
		month: number;
		dates: { date: Date | null; key: number | string }[];
	}[] = [];
	for (const date of _dates) {
		if (dates[dates.length - 1]?.month !== date.date.getMonth()) {
			dates.push({
				year: date.date.getFullYear(),
				month: date.date.getMonth(),
				dates: new Array(date.date.getDay())
					.fill(0)
					.map((_, i) => ({ date: null, key: `empty-${date.key}-${i}` })),
			});
		}

		dates[dates.length - 1]?.dates.push(date);
	}

	const plans: {
		date: Date;
		endDate?: Date;
		name: string;
		isHoliday?: boolean;
	}[] = [];
	for (const plan of _plans) {
		const { date, endDate, ...rest } = plan;

		plans.push({
			date: new Date(format(date, "yyyy-MM-dd")),
			endDate: endDate ? new Date(format(endDate, "yyyy-MM-dd")) : undefined,
			...rest,
		});
	}

	return (
		<ClientOnly fallback={<Loading />}>
			{() => (
				<Container as="main" py="4">
					<SimpleGrid columns={1} gap="2">
						{dates.map((_date, _i) => (
							<Aria
								key={`month-${_date.year}-${_date.month}`}
								title={`${_date.month + 1}月`}
								spaceY="0.5"
							>
								<Table.Root
									hideBelow="sm"
									size="sm"
									zIndex="1"
									pos="sticky"
									top={["0", "14"]}
								>
									<Table.Header>
										<Table.Row>
											{["日", "月", "火", "水", "木", "金", "土"].map((day) => (
												<Table.ColumnHeader key={day}>{day}</Table.ColumnHeader>
											))}
										</Table.Row>
									</Table.Header>
								</Table.Root>
								<SimpleGrid gap="0.5" columns={[1, 7]}>
									{_date.dates.map((date) => {
										// null: 先月,
										// []: 予定なし
										// length > 0: 予定あり
										const datePlans =
											date.date !== null
												? plans.filter(
														(plan) =>
															// biome-ignore lint/style/noNonNullAssertion: <?????>
															differenceInDays(date.date!, plan.date) === 0,
													)
												: null;
										const holidays = datePlans?.filter(
											(plan) => plan.isHoliday,
										);

										const buttonInner = (
											<VStack w="full" align="start" fontFamily="mono">
												<Text fontSize="lg">
													{date.date?.toISOString()}
													<FormatNumber
														value={date.date?.getDate() ?? 0}
														minimumIntegerDigits={2}
													/>
												</Text>
												<List.Root>
													{datePlans?.map((plan) => (
														<List.Item
															key={`${plan.date.toISOString()}-${plan.name}`}
															color={plan.isHoliday ? "red.fg" : "current"}
														>
															{plan.date.toISOString()}
															{plan.name}
														</List.Item>
													))}
												</List.Root>
											</VStack>
										);

										return (
											<Button
												key={`${_date.month}-${date.key}`}
												h="full"
												variant="surface"
												flexDir="column"
												justifyContent="start"
												py="2"
												overflow="hidden"
												whiteSpace="normal"
												hideBelow={!datePlans ? "sm" : undefined}
												{...(datePlans !== null
													? {
															...(datePlans.length !== 0 && {
																colorPalette: "green",
																...(holidays?.length !== 0 && {
																	borderColor: "red.emphasized",
																}),
																...(datePlans.length === holidays?.length && {
																	colorPalette: "red",
																	borderColor: "border",
																}),
															}),
														}
													: {
															disabled: true,
														})}
												{...(date.date &&
													differenceInDays(date.date, today) === 0 && {
														colorPalette: "yellow",
													})}
												asChild={Boolean(date.date)}
											>
												{date.date && (
													<NextLink
														href={`/calendar/${format(date.date, "yyyy-MM-dd")}`}
													>
														{buttonInner}
													</NextLink>
												)}
											</Button>
										);
									})}
								</SimpleGrid>
							</Aria>
						))}
					</SimpleGrid>
				</Container>
			)}
		</ClientOnly>
	);
}
