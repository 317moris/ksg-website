"use client";

import { FaCalendar, FaGrip } from "react-icons/fa6";
import type { PageProps } from "@/interfaces/pages";

export const pages: PageProps[] = [
	{
		name: "ダッシュボード",
		href: "/dashboard",
		icon: FaGrip,
	},
	{
		name: "予定表",
		href: "/calendar",
		icon: FaCalendar,
	},
];
