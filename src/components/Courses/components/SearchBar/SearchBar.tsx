import * as React from 'react';

import { useState } from 'react';

import Input from 'src/common/Input/Input';
import Button from 'src/common/Button/Button';
import { mockedCoursesList as data } from 'src/constants';

import { getCourses } from 'src/helpers/getCourses';

export default function SearchBar({ setCourses }) {
	const [query, setQuery] = useState('');

	const actionSearch = () => {
		const result = query === '' ? data : getCourses(query);
		setCourses(result);
	};

	return (
		<>
			<Input
				placeholder='Course'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Button text='Search' onClick={actionSearch} />
		</>
	);
}
