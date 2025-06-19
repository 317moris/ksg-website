"use client";

import { createListCollection, Flex, Portal, Select } from "@chakra-ui/react";

const categories = createListCollection({
	items: [
		{ label: "文化部", value: "culture" },
		{ label: "運動部", value: "sport" },
		{ label: "その他", value: "other" },
	],
});

const cultureClubs = createListCollection({
	items: [
		{ label: "吹奏楽部", value: "music" },
		{ label: "美術部", value: "art" },
		{ label: "写真部", value: "camera" },
	],
});

const sportClubs = createListCollection({
	items: [
		{ label: "バレー部男子/女子", value: "bolly" },
		{ label: "野球部", value: "baseball" },
		{ label: "陸上部", value: "rikujo" },
	],
});

const _clubs = {
	culture: cultureClubs,
	sport: sportClubs,
};

export function Selecter() {
	return (
		<Flex>
			<Select.Root collection={categories} size="sm" width="320px">
				<Select.HiddenSelect />
				<Select.Label>Select framework</Select.Label>
				<Select.Control>
					<Select.Trigger>
						<Select.ValueText placeholder="Select framework" />
					</Select.Trigger>
					<Select.IndicatorGroup>
						<Select.Indicator />
					</Select.IndicatorGroup>
				</Select.Control>
				<Portal>
					<Select.Positioner>
						<Select.Content>
							{categories.items.map((category) => (
								<Select.Item item={category} key={category.value}>
									{category.label}
									<Select.ItemIndicator />
								</Select.Item>
							))}
						</Select.Content>
					</Select.Positioner>
				</Portal>
			</Select.Root>
		</Flex>
	);
}
