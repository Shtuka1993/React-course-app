import styles from './Courses.module.css';

import { useEffect, useState } from 'react';

import { Button } from 'src/common/Button/Button';

import { getCourseById } from 'src/helpers/getCourseById';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseInfo from '../CourseInfo/CourseInfo';

import {
	ADD_COURSE_BTN,
	mockedCoursesList as coursesList,
} from 'src/constants';

import * as types from 'src/types';

export default function Courses(props: types.CoursesProps) {
	const { courses, setCourses } = props;

	const [showInfo, setShowInfo] = useState(false);
	const [courseId, setCourseId] = useState('');

	useEffect(() => setCourses(coursesList), [showInfo]);

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
	const list = <div>{components}</div>;
	const view = <>{courses.length !== 0 ? list : empty}</>;
	const component = showInfo ? (
		<CourseInfo course={getCourseById(courseId)} setShowInfo={setShowInfo} />
	) : (
		<div>
			<div className={styles.topControl}>
				<SearchBar setCourses={setCourses} />
				{btn}
			</div>
			{view}
		</div>
	);
	return <div className={styles.courses}>{component}</div>;
}
