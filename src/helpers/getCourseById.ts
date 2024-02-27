import { mockedCoursesList as data } from 'src/constants';

export const getCourseById = (id: string): unknown => {
	let course = null;
	data.map((item) => {
		if (item.id === id) course = item;
	});

	return course;
};
