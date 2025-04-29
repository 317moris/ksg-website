import type { IconType } from "react-icons";

export type PageProps = {
	name: string;
	description: string;
	href: string;
	icon: IconType;
	children?: {
		name: string;
		excerpt: string;
		href: string;
		icon: IconType;
		color?: string;
	}[];
};

export type CourseProps = {
	name: string;
	description: string;
	excerpt: string;
	href: string;
	icon: IconType;
	color: string;
};
