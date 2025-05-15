import type { IconType } from "react-icons";

export type PageProps = {
	name: string;
	href: string;
	hasHome?: boolean;
	icon: IconType;
	children?: {
		name: string;
		href: string;
		icon: IconType;
		color?: string;
	}[];
};

export type CourseProps = {
	name: string;
	description: string;
	href: string;
	icon: IconType;
	color: string;
};
