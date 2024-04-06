import { initialState, StoreInterface } from '..';
import {
	COURSE_REQUEST,
	COURSE_SUCCESS,
	COURSE_FAILURE,
	DataActionTypes,
} from './types';

export const addCourse = (state = initialState, action: DataActionTypes) => {
	state.courses = [action.payload, ...state.courses];
};

export const getCoursesData = (
	state = initialState,
	action: DataActionTypes
): StoreInterface => {
	return state;
};
