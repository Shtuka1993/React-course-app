export const formatCreationDate = (date: string): string => {
	const numbers = date.split('/');

	return numbers[1] + '.' + numbers[0] + '.' + numbers[2];
};
