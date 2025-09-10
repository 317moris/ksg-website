"use client";

import { createListCollection, Portal, Select } from "@chakra-ui/react";
import { groupBy } from "es-toolkit";

enum ClubType {
	Culture = "文化部",
	Sport = "運動部",
	Other = "その他",
}

const clubs = createListCollection({
	items: [
		{ label: "吹奏楽部", value: "music", category: ClubType.Culture },
		{ label: "美術部", value: "art", category: ClubType.Culture },
		{ label: "写真部", value: "camera", category: ClubType.Culture },
		{ label: "バレー部男子/女子", value: "bolly", category: ClubType.Sport },
		{ label: "野球部", value: "baseball", category: ClubType.Sport },
		{ label: "陸上部", value: "rikujo", category: ClubType.Sport },
	],
});

const categories = Object.entries(
	groupBy(clubs.items, (item) => item.category),
);

export function Selecter() {
	return (
		<Select.Root collection={clubs} maxW="xs" w="full">
			<Select.HiddenSelect />
			<Select.Label>部活動一覧</Select.Label>
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText placeholder="部活動を選択" />
				</Select.Trigger>
				<Select.IndicatorGroup>
					<Select.Indicator />
				</Select.IndicatorGroup>
			</Select.Control>
			<Portal>
				<Select.Positioner>
					<Select.Content pb="3.5">
						{categories.map(([category, clubs]) => (
							<Select.ItemGroup key={category}>
								<Select.ItemGroupLabel>{category}</Select.ItemGroupLabel>
								{clubs.map((club, i) => (
									<Select.Item
										item={club}
										mx="2"
										key={club.value}
										borderWidth={1}
										borderBottomWidth={i === 0 ? 0 : undefined}
										borderTopWidth={i + 1 === clubs.length ? 0 : undefined}
									>
										{club.label}
										<Select.ItemIndicator />
									</Select.Item>
								))}
							</Select.ItemGroup>
						))}
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select.Root>
	);
}
