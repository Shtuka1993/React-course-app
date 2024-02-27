import * as React from 'react';

import { useState } from 'react';

import Button from 'src/common/Button/Button';

import { getCourseById } from 'src/helpers/getCourseById';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseInfo from '../CourseInfo/CourseInfo';

import { ADD_COURSE_BTN } from 'src/constants';

interface coursesProp {
	data: object[];
}

export default function Courses(props: coursesProp) {
	const { data } = props;

	const [courses, setCourses] = useState(data);
	const [showInfo, setShowInfo] = useState(false);
	const [courseId, setCourseId] = useState('');
	const components =
		courses.length !== 0 ? (
			courses.map((course, id) => {
				return (
					<CourseCard
						course={course}
						setShowInfo={setShowInfo}
						setCourseId={setCourseId}
						key={id}
					/>
				);
			})
		) : (
			<></>
		);
	const btn = <Button text={ADD_COURSE_BTN} />;
	const empty = <EmptyCourseList />;
	const list = (
		<div>
			{components}
			{btn}
		</div>
	);
	const view = <>{courses.length !== 0 ? list : empty}</>;
	const component = showInfo ? (
		<CourseInfo
			course={getCourseById(courseId)}
			setShowInfo={setShowInfo}
			setCourses={setCourses}
		/>
	) : (
		<div>
			<SearchBar setCourses={setCourses} />
			{view}
		</div>
	);
	return <>{component}</>;
}
