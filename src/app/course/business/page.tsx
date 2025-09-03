import { PageHeader } from "@/components/page-header";
import { MainContainer } from "@/components/ui/main-container";
import { getProps } from "../header";

export default function Page() {
	const props = getProps("流通経済科");

	return (
		<MainContainer>
			<PageHeader
				title={props.name}
				subtitle={props.description}
				image={props.coverImage}
			/>
		</MainContainer>
	);
}
