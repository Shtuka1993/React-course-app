import {
	ADD_COURSE,
	COURSE_REQUEST,
	COURSE_SUCCESS,
	COURSE_FAILURE,
	DELETE_COURSE,
	SAVE_COURSES,
} from './types';
import { GetCourses } from 'src/services';
import { Dispatch } from '@reduxjs/toolkit';

import { mockedCoursesList } from 'src/constants';

const addCourseAction = (payload: unknown) => ({ type: ADD_COURSE, payload });
const deleteCourseAction = (payload: unknown) => ({
	type: DELETE_COURSE,
	payload,
});
const saveCoursesAction = (payload: unknown) => ({
	type: SAVE_COURSES,
	payload,
});

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
