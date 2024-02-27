import * as React from 'react';

import { useState } from 'react';

import Input from 'src/common/Input/Input';
import Button from 'src/common/Button/Button';

import { COURSE, SEARCH, mockedCoursesList as data } from 'src/constants';

import { getCourses } from 'src/helpers/getCourses';

interface searchBarProps {
	setCourses(data: object[]): void;
}

export default function SearchBar(props: searchBarProps) {
	const { setCourses } = props;

	const [query, setQuery] = useState('');

	const actionSearch = () => {
		const result = query === '' ? data : getCourses(query);
		setCourses(result);
	};

	return (
		<>
			<Input
				placeholder={COURSE}
				value={query}
				onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
			/>
			<Button text={SEARCH} onClick={actionSearch} />
		</>
	);
}
