import React from 'react';
import './App.css';

import Header from './components/Header/Header';

import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import Courses from './components/Courses/Courses';

import { mockedCoursesList, mockedAuthorsList } from './constants';

export default function App() {
	const component =
		mockedCoursesList.length !== 0 ? (
			<Courses data={mockedCoursesList} />
		) : (
			<EmptyCourseList />
		);
	return (
		<>
			<Header />
			{component}
		</>
	);
}
