import * as types from 'src/types';

import styles from './SearchBar.module.css';

import { useState } from 'react';

import Input from 'src/common/Input/Input';
import { Button } from 'src/common/Button/Button';

import { COURSE, SEARCH, mockedCoursesList as courses } from 'src/constants';

import { getCourses } from 'src/helpers/getCourses';

export default function SearchBar(props: types.SearchBarProps) {
	const { setCourses } = props;

	const [query, setQuery] = useState('');

	const actionSearch = () => {
		const result = query === '' ? courses : getCourses(query);
		setCourses(result);
	};

	return (
		<div className={styles.searchBar}>
			<Input
				placeholder={COURSE}
				value={query}
				onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
			/>
			<Button text={SEARCH} onClick={actionSearch} />
		</div>
	);
}
