import * as types from 'src/types';

import styles from './CourseInfo.module.css';

import { Button } from 'src/common/Button/Button';

import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { formatCreationDate } from 'src/helpers/formatCreationDate';
import { formatAuthorsData } from 'src/helpers/formatAuthorsData';

import {
	DESCRIPTION,
	ID,
	DURATION,
	CREATED,
	AUTHORS,
	BACK,
} from 'src/constants';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCourseById } from 'src/helpers/getCourseById';

export default function CourseInfo(props: types.CourseInfoProps) {
	const navigate = useNavigate();
	const params = useParams();
	const course = getCourseById(params.courseId);
	const onBackClick = () => {
		navigate('/');
	};

	return (
		<div className={styles.courseInfo}>
			<h2 className='courseTitle'>{course.title}</h2>
			<div className='courseCardContent'>
				<div>
					<h3 className='title'>{DESCRIPTION}:</h3>
					<p className='textBlock'>{course.description}</p>
				</div>
				<div>
					<ul className='courseDescriptionList'>
						<li>
							<b className='title'>{ID}:</b>
							{course.id}
						</li>
						<li>
							<b className='title'>{DURATION}:</b>
							{getCourseDuration(course.duration)}
						</li>
						<li>
							<b className='title'>{CREATED}:</b>
							{formatCreationDate(course.creationDate)}
						</li>
						<li>
							<b className='title'>{AUTHORS}:</b>
							{formatAuthorsData(course.authors)}
						</li>
					</ul>
				</div>
			</div>
			<Button text={BACK} onClick={onBackClick} />
		</div>
	);
}
