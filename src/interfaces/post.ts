import type {
	MicroCMSContentId,
	MicroCMSDate,
	MicroCMSImage,
} from "microcms-js-sdk";

export type Post = {
	coverImage?: MicroCMSImage;
	title: string;
	subtitle?: string;
	author: { name: string; icon?: MicroCMSImage } & MicroCMSContentId &
		MicroCMSDate;
	content: string;
};
