import { useRef } from "react";

export const useDebounce = (delay = 700) => {
	const canClick = useRef(true);

	const debounce = (callback: () => void) => {
		if (!canClick.current) return;

		canClick.current = false;
		callback();

		setTimeout(() => {
			canClick.current = true;
		}, delay);
	};

	return debounce;
};
