import * as React from 'react';

import Button from 'src/common/Button/Button';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

export default function Courses({ data }) {
	const components = data.map((course) => {
		return <CourseCard course={course} />;
	});
	return (
		<div>
			<SearchBar />
			{components}

			<Button text='Add new course' />
		</div>
	);
}
