import * as types from 'src/types';

import { mockedCoursesList as data } from 'src/constants';

export const getCourseById = (id: string): types.Course => {
	let course = null;
	data.map((item) => {
		if (item.id === id) course = item;
	});

	return course;
};
