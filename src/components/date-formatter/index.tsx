import { ClientOnly, HStack, Skeleton } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa6";
import { ClientDateFormatter } from "./date-formatter";

export function DateFormatter({ date }: { date: string }) {
	return (
		<ClientOnly fallback={<Skeleton h="1.5rem" maxW="20" w="full" />}>
			<HStack color="fg.muted" fontFamily="mono">
				<FaUpload />
				<ClientDateFormatter date={date} />
			</HStack>
		</ClientOnly>
	);
}
