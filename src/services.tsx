import axios from 'axios';

const baseURL = 'http://localhost:4000';

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

export const getCoursesService = () => axios.get(`${baseURL}/courses/all`);

export const createCourseService = (course: any) =>
	axios.post(`${baseURL}/courses/add`, course, {
		headers: {
			Authorization: localStorage.getItem('userToken'),
			'Content-Type': 'application/json',
		},
	});

export const deleteCourseService = (courseId: number) =>
	axios.delete(`${baseURL}/courses/${courseId}`, {
		headers: {
			Authorization: localStorage.getItem('userToken'),
			'Content-Type': 'application/json',
		},
	});

export const updateCourseService = (course: any) =>
	axios.put(`${baseURL}/courses/${course.id}`, course, {
		headers: {
			Authorization: localStorage.getItem('userToken'),
			'Content-Type': 'application/json',
		},
	});

export const getAuthorsService = () => axios.get(`${baseURL}/authors/all`);

export const createAuthorService = (author: any) =>
	axios.post(`${baseURL}/authors/add`, author, {
		headers: {
			Authorization: localStorage.getItem('userToken'),
			'Content-Type': 'application/json',
		},
	});

export const loginUserService = (user: any) =>
	axios.post(`${baseURL}/login`, user);

export const getUserService = () =>
	axios.get(`${baseURL}/users/me`, {
		headers: {
			Authorization: localStorage.getItem('userToken'),
			'Content-Type': 'application/json',
		},
	});

export const logoutUserService = () =>
	axios.delete(`${baseURL}/logout`, {
		headers: {
			Authorization: localStorage.getItem('userToken'),
			'Content-Type': 'application/json',
		},
	});
