import type {
	MicroCMSContentId,
	MicroCMSDate,
	MicroCMSImage,
} from "microcms-js-sdk";

export type CoverImage = {
	url: string;
	width: number;
	height: number;
};

export type Post = {
	coverImage?: CoverImage;
	title: string;
	subtitle?: string;
	author: { name: string; icon?: MicroCMSImage } & MicroCMSContentId &
		MicroCMSDate;
	content: string;
};
