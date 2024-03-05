import styles from './Courses.module.css';

import { useState } from 'react';

import { Button } from 'src/common/Button/Button';

import { getCourseById } from 'src/helpers/getCourseById';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseInfo from '../CourseInfo/CourseInfo';

import { ADD_COURSE_BTN } from 'src/constants';

import * as types from 'src/types';

import { useNavigate } from 'react-router-dom';
export default function Courses(props: types.CoursesProps) {
	const navigate = useNavigate();
	const { courses, setCourses } = props;

	const [courseId, setCourseId] = useState<string | undefined>(undefined);

	const onBackClick = (): void => setCourseId(undefined);
	const onAddClick = () => {
		navigate('/courses/add');
	};
	const onShowCourseClick = (id: string) => {
		navigate(`/course/${id}`);
	};

	const btn = <Button onClick={onAddClick} text={ADD_COURSE_BTN} />;
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

	const components = courses
		.filter((course) => {
			if (course != undefined) return course;
		})
		.map((course, id) => {
			return (
				<CourseCard
					course={course}
					key={id}
					onShowCourseClick={() => {
						onShowCourseClick(course.id);
					}}
				/>
			);
		});

	const list = <div>{components}</div>;

	if (courseId !== undefined) {
		return (
			<div className={styles.courses}>
				<CourseInfo />
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
