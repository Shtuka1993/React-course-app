import './App.css';

import { useState } from 'react';

import Header from './components/Header/Header';

import Courses from './components/Courses/Courses';

import { mockedCoursesList } from './constants';

export default function App() {
	const [courses, setCourses] = useState(mockedCoursesList);

	return (
		<>
			<Header />
			<div className='contentBlock'>
				<Courses courses={courses} setCourses={setCourses} />
			</div>
		</>
	);
}
