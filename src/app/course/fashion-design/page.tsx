import { Container } from "@chakra-ui/react";
import { PageHeader } from "@/components/page-header";
import { getProps } from "../header";

export default function Page() {
	const props = getProps("服飾デザイン科");

	return (
		<Container>
			<PageHeader
				title={props.name}
				subtitle={props.description}
				image={props.coverImage}
			/>
		</Container>
	);
}
