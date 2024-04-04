import { ADD_COURSE } from './types';

export const addCourse = (payload: unknown) => ({ type: ADD_COURSE, payload });

export const addTodo = (text: string) => ({
	type: ADD_COURSE,
	payload: { text },
});
