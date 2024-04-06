import { initialState, StoreInterface } from '..';
import { fetchData } from './action';
import {
	COURSE_REQUEST,
	COURSE_SUCCESS,
	COURSE_FAILURE,
	DataActionTypes,
} from './types';

// export const coursesInitialState: unknown = [];

export const addCourse = (state = initialState, action: DataActionTypes) => {
	state.courses = [action.payload, ...state.courses];
};

/*export const getCoursesData = (
	state = initialState,
	action: DataActionTypes
): StoreInterface => {
	return state;
};*/

export const coursesReducer = (
	state: StoreInterface,
	action: DataActionTypes
) => {
	switch (action.type) {
		//TODO!
		default:
			return fetchData;
		//return state;
	}
};
