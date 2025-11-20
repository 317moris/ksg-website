"use client";

import { Card, Container, EmptyState, For, VStack } from "@chakra-ui/react";
import { differenceInDays, format } from "date-fns";
import { FaXmark } from "react-icons/fa6";
import { Aria } from "@/components/ui/aria";
import type { PlanType } from "@/interfaces/plan";

export default function Page({
	date,
	_plans,
}: {
	date: string;
	_plans: PlanType[];
}) {
	const plans = _plans.filter(
		(plan) => differenceInDays(new Date(plan.date), new Date(date)) === 0,
	);

	return (
		<Container as="main">
			<Aria title={format(new Date(date), "yyyy年M月d日")}>
				<For
					each={plans}
					fallback={
						<EmptyState.Root>
							<EmptyState.Content>
								<EmptyState.Indicator>
									<FaXmark />
								</EmptyState.Indicator>
								<VStack>
									<EmptyState.Title>予定はありません。</EmptyState.Title>
								</VStack>
							</EmptyState.Content>
						</EmptyState.Root>
					}
				>
					{(plan) => (
						<Card.Root key={plan.name}>
							<Card.Body>
								<Card.Title>{plan.name}</Card.Title>
							</Card.Body>
						</Card.Root>
					)}
				</For>
			</Aria>
		</Container>
	);
}
