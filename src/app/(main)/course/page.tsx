import { Container, SimpleGrid } from "@chakra-ui/react";
import { FaRoad } from "react-icons/fa6";
import { Courses } from "@/components/courses";
import { Aria } from "@/components/ui/aria";

export default function Page() {
	return (
		<Container py="8">
			<Aria title="学科" icon={<FaRoad />}>
				<SimpleGrid
					columns={{
						lgDown: 1,
						lg: 2,
					}}
					w="full"
					gap="4"
				>
					<Courses />
				</SimpleGrid>
			</Aria>
		</Container>
	);
}
