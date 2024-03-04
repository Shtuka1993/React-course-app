import './App.css';

import { useState } from 'react';

import Header from './components/Header/Header';

import Courses from './components/Courses/Courses';

import { mockedCoursesList } from './constants';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

export default function App() {
	const [courses, setCourses] = useState(mockedCoursesList);

	return (
		<BrowserRouter>
			<Header />
			<div className='contentBlock'>
				<Routes>
					<Route
						path='/'
						element={<Courses courses={courses} setCourses={setCourses} />}
					/>
					<Route path='/login' element={<Login />} />
					<Route path='/registration' element={<Registration />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
