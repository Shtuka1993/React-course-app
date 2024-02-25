export const formatCreationDate = (date) => {
	const numbers = date.split('/');

	return numbers[1] + '.' + numbers[0] + '.' + numbers[2];
};
