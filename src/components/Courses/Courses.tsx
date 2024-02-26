import * as React from 'react';

import { useState } from 'react';

import Button from 'src/common/Button/Button';

import { getCourseById } from 'src/helpers/getCourseById';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseInfo from '../CourseInfo/CourseInfo';

export default function Courses({ data }) {
	const [courses, setCourses] = useState(data);
	const [showInfo, setShowInfo] = useState(false);
	const [courseId, setCourseId] = useState('');
	const components =
		courses.length !== 0 ? (
			courses.map((course) => {
				return (
					<CourseCard
						course={course}
						setShowInfo={setShowInfo}
						setCourseId={setCourseId}
					/>
				);
			})
		) : (
			<EmptyCourseList />
		);
	const component = showInfo ? (
		<CourseInfo course={getCourseById(courseId)} setShowInfo={setShowInfo} />
	) : (
		<div>
			<SearchBar />
			{components}

			<Button text='Add new course' />
		</div>
	);
	return <>{component}</>;
}
