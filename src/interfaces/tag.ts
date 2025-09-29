import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type TagType = MicroCMSListContent & {
	name: string;
	icon: MicroCMSImage;
};
