import { PageHeader } from "@/components/page-header";
import { MainContainer } from "@/components/ui/main-container";

export default function Page() {
	return (
		<MainContainer>
			<PageHeader
				title="行事予定"
				subtitle="今年度1年間の行事をPDFで配信しています。"
				image="https://ksg-h.spec.ed.jp/wysiwyg/image/download/1/11847/big"
			/>
		</MainContainer>
	);
}
