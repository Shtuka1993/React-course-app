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
