import {
	ADD_COURSE,
	COURSE_REQUEST,
	COURSE_SUCCESS,
	COURSE_FAILURE,
} from './types';
import { GetCourses } from 'src/services';
import { Dispatch } from '@reduxjs/toolkit';

import { mockedCoursesList } from 'src/constants';

export const addCourse = (payload: unknown) => ({ type: ADD_COURSE, payload });

export const addTodo = (text: string) => ({
	type: ADD_COURSE,
	payload: { text },
});

export const fetchData = () => {
	return async (dispatch: Dispatch) => {
		dispatch({ type: COURSE_REQUEST });

		try {
			const data = mockedCoursesList; //await GetCourses();
			dispatch({ type: COURSE_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: COURSE_FAILURE, payload: error.message });
		}
	};
};
