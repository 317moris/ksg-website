"use client";

import { createListCollection, Portal, Select } from "@chakra-ui/react";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import type { Author } from "@/interfaces/author";
import { getAuthors } from "@/lib/search";

export function AuthorsMenu({
	author,
	setAuthor,
}: {
	author: string | null;
	setAuthor: Dispatch<SetStateAction<string | null>>;
}) {
	const [allAuthors, setAllAuthors] = useState<MicroCMSListResponse<Author>>();

	useEffect(() => {
		(async () => {
			const res = await getAuthors();
			setAllAuthors(res);
		})();
	}, []);

	if (!allAuthors) return null;

	const collection = createListCollection({
		items: allAuthors.contents.map((author) => {
			return { label: author.name, value: author.id };
		}),
	});

	return (
		<Select.Root
			collection={collection}
			{...(author && { value: [author] })}
			onValueChange={(e) => {
				setAuthor(e.value[0]);
			}}
		>
			<Select.HiddenSelect />
			<Select.Label>作成者 / 団体</Select.Label>
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText placeholder="選択" />
				</Select.Trigger>
				<Select.IndicatorGroup>
					<Select.Indicator />
				</Select.IndicatorGroup>
			</Select.Control>
			<Portal>
				<Select.Positioner>
					<Select.Content>
						{collection.items.map((author) => (
							<Select.Item item={author} key={author.value}>
								{author.label}
								<Select.ItemIndicator />
							</Select.Item>
						))}
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select.Root>
	);
}
