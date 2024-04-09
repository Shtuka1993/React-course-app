import './App.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CourseForm from './components/CourseForm/CourseForm';
import { fetchCourses } from './store/courses/thunk';
import { fetchAuthors } from './store/authors/thunk';

export default function App() {
	const dispatch = useDispatch();
	const { user, courses, authors } = useSelector((state: any) => ({
		user: state.user,
		courses: state.courses.courses,
		authors: state.authors.authors,
	}));
	const defaultPath = user && user.isAuth ? '/courses' : '/login';
	useEffect(() => {
		dispatch(fetchCourses());
		dispatch(fetchAuthors());
	}, [dispatch]);
	return (
		<BrowserRouter>
			<Header />
			<div className='contentBlock'>
				<Routes>
					<Route path='*' element={<Navigate to='/login' />} />
					<Route path='/courses' element={<Courses courses={courses} />} />
					<Route path='/login' element={<Login />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/course/:courseId' element={<CourseInfo />} />
				</Routes>
				<PrivateRoute>
					<CourseForm />
				</PrivateRoute>
			</div>
		</BrowserRouter>
	);
}
