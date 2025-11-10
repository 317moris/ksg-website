"use client";

import { Flex, Switch } from "@chakra-ui/react";
import { useState } from "react";
import { TopCalendar } from "./top-calendar";

export function TopCalendarWrap() {
	const [hideEmpty, setHideEmpty] = useState(true);

	return (
		<>
			<Switch.Root
				checked={hideEmpty}
				onCheckedChange={(e) => setHideEmpty(e.checked)}
			>
				<Switch.HiddenInput />
				<Switch.Label>予定が無い日を非表示(デモ用)</Switch.Label>
				<Switch.Control />
			</Switch.Root>
			<Flex borderWidth="1px" maxW="full" h="64" overflowX="auto" rounded="lg">
				<TopCalendar hideEmpty={hideEmpty} />
			</Flex>
		</>
	);
}
