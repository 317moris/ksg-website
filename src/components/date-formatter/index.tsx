import { ClientOnly, HStack, Text } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa6";
import { Skeleton } from "../ui/skeleton";
import { ClientDateFormatter } from "./date-formatter";

export function DateFormatter({ createdAt }: { createdAt: string }) {
	return (
		<ClientOnly fallback={<Skeleton h="1.5rem" maxW="20" w="full" />}>
			<HStack color="fg.muted" fontFamily="mono">
				<FaUpload />
				<Text>
					<ClientDateFormatter date={createdAt} />
				</Text>
			</HStack>
		</ClientOnly>
	);
}
