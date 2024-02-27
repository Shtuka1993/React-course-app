export const getCourseDuration = (minutes: number): string => {
	const hourDuration = 60;
	const hours = Math.floor(minutes / hourDuration);
	minutes = minutes % hourDuration;

	return `${hours < 10 ? 0 : ''}${hours}:${minutes} hour${hours == 1 ? '' : 's'}`;
};
