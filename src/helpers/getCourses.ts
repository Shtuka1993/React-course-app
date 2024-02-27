import { mockedCoursesList as data } from 'src/constants';

export const getCourses = (query: string): object[] => {
	const courses = data.map((item) => {
		if (item.id.includes(query)) return item;

		if (item.title.includes(query)) return item;
	});
	const newCourses = courses.filter((element) => {
		return element !== undefined;
	});
	return newCourses;
};
