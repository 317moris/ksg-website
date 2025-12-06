import { ClientOnly } from "@chakra-ui/react";
import Loading from "@/app/loading";
import _plans from "../_data/plans.json";
import InnerPage from "./_page";

export default async function Page({
	params,
}: {
	params: Promise<{ date: string }>;
}) {
	const { date } = await params;

	return (
		<ClientOnly fallback={<Loading />}>
			<InnerPage date={date} _plans={_plans} />
		</ClientOnly>
	);
}
