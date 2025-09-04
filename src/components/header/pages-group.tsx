"use client";

import { Group } from "@chakra-ui/react";
import { Pages } from "./pages";

export function PagesGroup() {
	return (
		<Group attached>
			<Pages drawer={false} />
		</Group>
	);
}
