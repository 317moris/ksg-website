import { Container } from "@chakra-ui/react";
import { PageHeader } from "@/components/page-header";

export default function Page() {
	return (
		<Container>
			<PageHeader
				title="行事予定"
				subtitle="今年度1年間の行事をPDFで配信しています。"
				image="https://ksg-h.spec.ed.jp/wysiwyg/image/download/1/11847/big"
			/>
		</Container>
	);
}
