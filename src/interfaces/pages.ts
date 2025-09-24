import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import type { IconType } from "react-icons";

export type PageChildrenProps = {
	name: string;
	href: string;
	icon: IconType;
	color?: string;
};

export type PageProps = {
	name: string;
	href: string;
	hasHome?: boolean;
	icon: IconType;
	children?: PageChildrenProps[] | CourseProps[];
};

export type CourseProps = {
	name: string;
	description: string;
	href: string;
	icon: IconType;
	color: string;
	coverImage: string;
	font: { font: NextFontWithVariable; variable: string };
};
