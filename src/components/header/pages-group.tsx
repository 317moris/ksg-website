"use client";

import { Group } from "@chakra-ui/react";
import { Pages } from "./pages";

export function PagesGroup() {
	return (
		<Group>
			<Pages drawer={false} />
		</Group>
	);
}
