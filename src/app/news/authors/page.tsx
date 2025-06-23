import { FaArrowPointer } from "react-icons/fa6";
import { EmptyState } from "@/components/ui/empty-state";

export default function Page() {
	return (
		<EmptyState title="作成者 / 団体を選んで下さい" icon={<FaArrowPointer />} />
	);
}
