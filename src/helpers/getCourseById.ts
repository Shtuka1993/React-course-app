import { mockedCoursesList as data } from 'src/constants';

export const getCourseById = (id) => {
	let course = null;
	const stub = data.map((item) => {
		if (item.id === id) course = item;
	});

	return course;
};
