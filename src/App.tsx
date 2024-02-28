import React from 'react';
import './App.css';

import Header from './components/Header/Header';

import Courses from './components/Courses/Courses';

import { mockedCoursesList } from './constants';

export default function App() {
	return (
		<>
			<Header />
			<div className='content-block'>
				<Courses data={mockedCoursesList} />
			</div>
		</>
	);
}
