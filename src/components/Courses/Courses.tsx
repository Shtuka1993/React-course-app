import styles from './Courses.module.css';

import { Button } from 'src/common/Button/Button';

import CourseCard from './components/CourseCard/CourseCard';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';

import { ADD_COURSE_BTN } from 'src/constants';

import * as types from 'src/types';

import { useNavigate } from 'react-router-dom';
export default function Courses(props: types.CoursesProps) {
	const navigate = useNavigate();
	const { courses } = props;

	const onAddClick = () => {
		navigate('/courses/add');
	};
	const onShowCourseClick = (id: string) => {
		navigate(`/course/${id}`);
	};

	const empty = <EmptyCourseList />;

	if (courses.length === 0) {
		return <div className={styles.courses}>{empty}</div>;
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

	const view = <div className={styles.courses}>{list}</div>;

	return <>{view}</>;
}
