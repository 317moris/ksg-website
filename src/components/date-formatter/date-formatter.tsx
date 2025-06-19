"use client";

import {
	differenceInDays,
	differenceInHours,
	differenceInMinutes,
	differenceInSeconds,
	format,
	parseISO,
} from "date-fns";

export function ClientDateFormatter({ date }: { date: string }) {
	const parsedDate = parseISO(date);
	const now = new Date();

	const secondsDiff = differenceInSeconds(now, parsedDate);
	const minutesDiff = differenceInMinutes(now, parsedDate);
	const hoursDiff = differenceInHours(now, parsedDate);
	const daysDiff = differenceInDays(now, parsedDate);

	let formattedDate: string;

	if (secondsDiff < 60) {
		formattedDate = `${secondsDiff}秒前`;
	} else if (minutesDiff < 60) {
		formattedDate = `${minutesDiff}分前`;
	} else if (hoursDiff < 24) {
		formattedDate = `${hoursDiff}時間前`;
	} else if (daysDiff <= 3) {
		formattedDate = `${daysDiff}日前`;
	} else if (parsedDate.getFullYear() === now.getFullYear()) {
		formattedDate = format(parsedDate, "M月d日");
	} else {
		formattedDate = format(parsedDate, "yyyy月M日d");
	}

	return <time>{formattedDate}</time>;
}
