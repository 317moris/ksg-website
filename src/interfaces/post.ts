import type {
	MicroCMSContentId,
	MicroCMSDate,
	MicroCMSImage,
} from "microcms-js-sdk";
import type { TagType } from "./tag";

export type RecentPost = {
	coverImage?: MicroCMSImage;
	title: string;
	subtitle?: string;
	author: { name: string; icon?: MicroCMSImage } & MicroCMSContentId &
		MicroCMSDate;
	tag?: TagType[];
};

export type Post = RecentPost & {
	content: string;
};
