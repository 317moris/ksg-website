"use client";

import { Flex, Switch } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { TopCalendar } from "./top-calendar";

export function TopCalendarWrap() {
	const [hideEmpty, setHideEmpty] = useState(true);
	const ref = useRef<HTMLDivElement | null>(null);

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
			<Flex
				ref={ref}
				borderWidth="1px"
				maxW="full"
				h="64"
				overflowX="auto"
				rounded="lg"
			>
				<TopCalendar ref={ref} hideEmpty={hideEmpty} />
			</Flex>
		</>
	);
}
