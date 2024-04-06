/*import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCourse } from './store';
import { Course } from 'src/types';*/

/*export const GetCourses: () => Course[] | [] = () => {
	const dispatch = useDispatch();
	console.log('dispatch');
	axios
		.get('http://localhost:4000/courses/all')
		.then((response) => {
			return response.data.result;
		})
		.catch((error) => {
			console.error(error.response);
			return [];
		});
};

export const GetAuthors = () => {
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
};*/

const coursesUrl = 'http://localhost:4000/courses/all';
const authorsUrl = 'http://localhost:4000/authors/all';

const apiRequest = (url: string) => {
	async (): Promise<unknown[]> => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			return data;
		} catch (error) {
			throw new Error('Failed to fetch data from API');
		}
	};
};

export const GetCourses = async () => {
	return apiRequest(coursesUrl);
};

export const GetAuthors = async () => {
	return apiRequest(authorsUrl);
};
