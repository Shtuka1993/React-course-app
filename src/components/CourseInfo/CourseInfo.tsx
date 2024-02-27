import * as React from 'react';

import Button from 'src/common/Button/Button';

import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { formatCreationDate } from 'src/helpers/formatCreationDate';
import { formatAuthorsData } from 'src/helpers/formatAuthorsData';

import {
	mockedCoursesList as data,
	DESCRIPTION,
	ID,
	DURATION,
	CREATED,
	AUTHORS,
	BACK,
} from 'src/constants';

interface courseInfoProps {
	course: any;
	setShowInfo?(state: boolean): void;
	setCourses?(data: object[]): void;
}

export default function CourseInfo(props: courseInfoProps) {
	const { course, setShowInfo, setCourses } = props;

	const actionBack = () => {
		setShowInfo(false);
		setCourses(data);
	};
	return (
		<div className='course-info'>
			<h2 className='course-title'>{course.title}</h2>
			<div className='course-card'>
				<div className='left-block'>
					<h3 className='title'>{DESCRIPTION}:</h3>
					<p className='text-block'>{course.description}</p>
				</div>
				<div className='right-block'>
					<ul className='course-description-list'>
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
					<Button text={BACK} onClick={actionBack} />
				</div>
			</div>
		</div>
	);
}
