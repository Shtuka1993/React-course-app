import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCourse } from './store';

export const GetCourses = () => {
	const dispatch = useDispatch();
	console.log('dispatch');
	axios
		.get('http://localhost:4000/courses/all')
		.then((response) => {
			return response.data.result;
		})
		.catch((error) => {
			console.error(error.response);
		});
};

export const GetAuthors: () => unknown[] = () => {
	const dispatch = useDispatch();
	axios
		.get('http://localhost:4000/authors/all')
		.then((response) => {
			return response.data.result;
		})
		.catch((error) => {
			console.error(error.response);
			return [];
		});
};
