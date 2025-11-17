"use client";

import {
	Button,
	ClientOnly,
	Container,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import { differenceInDays } from "date-fns";
import { useState } from "react";
import { Aria } from "@/components/ui/aria";
import Loading from "../loading";

export default function Page() {
	const [today, _setToday] = useState(new Date());

	const dateNums = differenceInDays(
		new Date(today.getFullYear() + 1, 0, 1),
		new Date(today.getFullYear(), 0, 1),
	);
	const _dates = new Array(dateNums)
		.fill(0)
		.map((_, i) => ({ date: new Date(today.getFullYear(), 0, i + 1), key: i }));

	const dates: {
		month: number;
		dates: { date: Date | null; key: number | string }[];
	}[] = [];
	for (const date of _dates) {
		if (dates[dates.length - 1]?.month !== date.date.getMonth()) {
			dates.push({
				month: date.date.getMonth(),
				dates: new Array(date.date.getDay())
					.fill(0)
					.map((_, i) => ({ date: null, key: `empty-${date.key}-${i}` })),
			});
		}

		dates[dates.length - 1]?.dates.push(date);
	}

	return (
		<ClientOnly fallback={<Loading />}>
			<Container>
				<SimpleGrid columns={2} gap="2">
					{dates.map((_date, _i) => (
						<Aria key={`month-${_date.month}`} title={`${_date.month + 1}月`}>
							<SimpleGrid columns={7}>
								{_date.dates.map((date) => (
									<Button
										key={`${_date.month}-${date.key}`}
										h="full"
										variant="outline"
										flexDir="column"
										py="2"
									>
										<VStack fontFamily="mono">
											<Text>{date.date?.getDate() ?? ""}</Text>
										</VStack>
									</Button>
								))}
							</SimpleGrid>
						</Aria>
					))}
				</SimpleGrid>
			</Container>
		</ClientOnly>
	);
}
