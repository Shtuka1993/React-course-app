import { initialState } from '..';

interface ActionInterface {
	type?: unknown;
	payload?: unknown;
}

export const addCourse = (state = initialState, action: ActionInterface) => {
	state.courses = [action.payload, ...state.courses];
};
