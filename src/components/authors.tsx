"use client";

import { createListCollection, Portal, Select } from "@chakra-ui/react";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { use, useState } from "react";
import type { Author } from "@/interfaces/author";

export function AuthorsMenu({
	authors,
}: {
	authors: Promise<MicroCMSListResponse<Author>>;
}) {
	const allAuthors = use(authors);
	const collection = createListCollection({
		items: allAuthors.contents.map((author) => {
			return { label: author.name, value: author.id };
		}),
	});

	const path = useParams<{ slug: string }>();
	const [value, setValue] = useState<string[]>([path.slug]);

	return (
		<Select.Root
			collection={collection}
			value={value}
			onValueChange={(e) => setValue(e.value)}
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
							<Select.Item item={author} key={author.value} asChild>
								<NextLink href={`/news/authors/${author.value}`}>
									{author.label}
									<Select.ItemIndicator />
								</NextLink>
							</Select.Item>
						))}
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select.Root>
	);
}
