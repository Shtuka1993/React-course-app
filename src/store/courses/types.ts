import { Course } from 'src/types';

export const SAVE_COURSES = 'SAVE_COURSES';
export const DELETE_COURSE = 'DELETE_COURSE';
export const ADD_COURSE = 'ADD_COURSE';
export const COURSE_REQUEST = 'COURSE_REQUEST';
export const COURSE_SUCCESS = 'COURSE_SUCCESS';
export const COURSE_FAILURE = 'COURSE_FAILURE';

export interface FetchDataRequestAction {
	type: typeof COURSE_REQUEST;
	payload: Course;
}

export type DataActionTypes = FetchDataRequestAction;
