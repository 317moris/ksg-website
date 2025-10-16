import { Text } from "@chakra-ui/react";
import { FaVolleyball } from "react-icons/fa6";
import { Aria } from "@/components/ui/aria";

export default function Page() {
	return (
		<Aria
			title="部活動関連のお知らせ"
			icon={<FaVolleyball />}
			maxW="4xl"
			w="full"
		>
			<Text>仮</Text>
		</Aria>
	);
}
