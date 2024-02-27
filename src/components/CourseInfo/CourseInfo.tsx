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
		<>
			<h2>{course.title}</h2>
			<div>
				<div>
					<h3>{DESCRIPTION}:</h3>
					<p>{course.description}</p>
				</div>
				<div>
					<ul>
						<li>
							<b>{ID}:</b>
							{course.id}
						</li>
						<li>
							<b>{DURATION}:</b>
							{getCourseDuration(course.duration)}
						</li>
						<li>
							<b>{CREATED}:</b>
							{formatCreationDate(course.creationDate)}
						</li>
						<li>
							<b>{AUTHORS}:</b>
							{formatAuthorsData(course.authors)}
						</li>
					</ul>
					<Button text={BACK} onClick={actionBack} />
				</div>
			</div>
		</>
	);
}
