import * as React from 'react';

import Button from 'src/common/Button/Button';

import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { formatCreationDate } from 'src/helpers/formatCreationDate';
import { formatAuthorsData } from 'src/helpers/formatAuthorsData';

export default function CourseCard({
	course,
	//showInfo,
	setShowInfo,
	//courseId,
	setCourseId,
}) {
	const showInfoAction = () => {
		setShowInfo(true);
		setCourseId(course.id);
	};
	return (
		<>
			<div>
				<h3>{course.title}</h3>
				<p>{course.description}</p>
			</div>
			<div>
				<ul>
					<li>
						<b>Authors:</b>
						{formatAuthorsData(course.authors)}
					</li>
					<li>
						<b>Duration:</b>
						{getCourseDuration(course.duration)}
					</li>
					<li>
						<b>Created:</b>
						{formatCreationDate(course.creationDate)}
					</li>
				</ul>
				<Button text='Show course' onClick={showInfoAction} />
			</div>
		</>
	);
}
