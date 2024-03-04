import './App.css';

import { useState } from 'react';

import Header from './components/Header/Header';

import Courses from './components/Courses/Courses';

import { mockedCoursesList } from './constants';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

export default function App() {
	const [courses, setCourses] = useState(mockedCoursesList);

	return (
		<BrowserRouter>
			<Header />
			<div className='contentBlock'>
				<Routes>
					<Route path='*' element={<Navigate to='/' />} />
					<Route path='/' element={<Navigate to='/courses' />} />
					<Route
						path='/courses'
						element={<Courses courses={courses} setCourses={setCourses} />}
					/>
					<Route path='/courses/add' element={<CreateCourse />} />
					<Route path='/login' element={<Login />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/course/:courseId' element={<CourseInfo />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
