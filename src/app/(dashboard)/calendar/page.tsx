"use client";

import {
	Button,
	ClientOnly,
	Container,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import { differenceInDays, format } from "date-fns";
import { useState } from "react";

export default function Page() {
	const [today, setToday] = useState(new Date());

	const dateNums = differenceInDays(
		new Date(today.getFullYear() + 1, 0, 1),
		new Date(today.getFullYear(), 0, 1),
	);
	const _dates = new Array(dateNums)
		.fill(0)
		.map((_, i) => new Date(today.getFullYear(), 0, i + 1));
	const dates: (Date | null)[] = [
		...new Array(new Date(today.getFullYear(), 0, 1).getDay()).fill(null),
		..._dates,
	];

	let prevMonth = -1;
	return (
		<ClientOnly>
			<Container>
				<SimpleGrid columns={7}>
					{dates.map((date, i) => {
						if (!date)
							return (
								<Button key={`empty-dates-${i}`} variant="outline" h="full" />
							);

						let showMonth = false;

						if (date.getMonth() !== prevMonth) {
							showMonth = true;
							prevMonth = date.getMonth();
						}

						return (
							<Button
								key={date.toISOString()}
								variant="outline"
								flexDir="column"
								h="fit"
								py="2"
							>
								<VStack fontFamily="mono">
									<Text visibility={showMonth ? "visible" : "hidden"}>
										{date.getMonth() + 1}
									</Text>
									<Text>{date.getDate()}</Text>
								</VStack>
							</Button>
						);
					})}
				</SimpleGrid>
			</Container>
		</ClientOnly>
	);
}
