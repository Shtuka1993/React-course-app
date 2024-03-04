export const getCourseDuration = (minutesDuration: number): string => {
	const hourDuration = 60;
	const hours = Math.floor(minutesDuration / hourDuration);
	const minutes = minutesDuration % hourDuration;

	return `${hours < 10 ? 0 : ''}${hours}:${minutes} hour${hours == 1 ? '' : 's'}`;
};
