import { createSlice } from '@reduxjs/toolkit';
import { Course } from 'src/types';
//import { GetCourses, GetAuthors } from 'src/services';
import { configureStore } from '@reduxjs/toolkit';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export store;

interface UserInterface {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
}

export interface StoreInterface {
	user: UserInterface;
	courses: Course[] | null;
	authors: unknown[] | null;
}

export const initialState: StoreInterface = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
	courses: null,
	authors: null,
};

const courses = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		addCourse: (state, action) => {
			state.courses = [action.payload, ...state.courses];
		},
		addAuthor: (state, action) => {
			state.authors = action.payload;
		},
		deleteCourse: (state, action) => {
			const indexOfObject = state.courses.findIndex((object) => {
				return object.id === action.payload;
			});
			state.courses.splice(indexOfObject, 1);
		},
		createAuthor: (state, action) => {
			state.authors = [action.payload, ...state.authors];
		},
		saveUser: (state, action) => {
			state.user = {
				isAuth: action.payload[0],
				name: action.payload[1],
				email: action.payload[2],
				token: action.payload[3],
			};
		},
	},
});

export const { addCourse } = courses.actions;
export const { deleteCourse } = courses.actions;
export const { addAuthor } = courses.actions;
export const { createAuthor } = courses.actions;
export const { saveUser } = courses.actions;
export default courses.reducer;
