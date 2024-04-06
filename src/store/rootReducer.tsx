import { combineReducers, configureStore } from '@reduxjs/toolkit';
//import { userReducer } from './user/reducer';
import { coursesReducer } from './courses/reducer.js';
//import { authorsReducer } from './authors/reducer';

export const rootReducer = combineReducers({
	//user: userReducer,
	courses: coursesReducer,
	//authors: authorsReducer,
});

export const store = configureStore({ reducer: rootReducer });
