import { mockedCoursesList as data } from 'src/constants';

export const getCourses = (query) => {
	const courses = data.map((item) => {
		if (item.id.includes(query)) return item;

		if (item.title.includes(query)) return item;
	});

	return courses;
};
