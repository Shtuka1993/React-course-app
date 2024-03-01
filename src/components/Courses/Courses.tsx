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

	const btn = <Button text={ADD_COURSE_BTN} />;
	const empty = <EmptyCourseList />;

	const topBar = (
		<div className={styles.topControl}>
			<SearchBar setCourses={setCourses} />
			{btn}
		</div>
	);

	if (courses.length === 0) {
		return (
			<div className={styles.courses}>
				{topBar}
				{empty}
			</div>
		);
	}

	const components = courses.map((course, id) => {
		return (
			<CourseCard
				course={course}
				setShowInfo={setShowInfo}
				setCourseId={setCourseId}
				key={id}
			/>
		);
	});

	const list = <div>{components}</div>;

	if (showInfo) {
		return (
			<div className={styles.courses}>
				{topBar}
				<CourseInfo
					course={getCourseById(courseId)}
					setShowInfo={setShowInfo}
				/>
			</div>
		);
	}

	const view = (
		<div className={styles.courses}>
			{topBar}
			{list}
		</div>
	);

	return <>{view}</>;
}
