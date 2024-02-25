import { mockedAuthorsList } from 'src/constants';

export const formatAuthorsData = (ids) => {
	const authors = mockedAuthorsList.map((author) => {
		if (ids.includes(author.id)) return author.name;
	});

	return authors.join(', ');
};
