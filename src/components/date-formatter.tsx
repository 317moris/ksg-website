"use client";

import {
	differenceInDays,
	differenceInHours,
	differenceInMinutes,
	differenceInSeconds,
	format,
	parseISO,
} from "date-fns";

export function DateFormatter({ date }: { date: string }) {
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
		formattedDate = format(parsedDate, "MM/dd");
	} else {
		formattedDate = format(parsedDate, "yyyy/MM/dd");
	}

	return <time>{formattedDate}</time>;
}
