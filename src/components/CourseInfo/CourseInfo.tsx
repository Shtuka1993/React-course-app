import * as React from 'react';

import Button from 'src/common/Button/Button';

import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { formatCreationDate } from 'src/helpers/formatCreationDate';
import { formatAuthorsData } from 'src/helpers/formatAuthorsData';

import { mockedCoursesList as data } from 'src/constants';

export default function CourseInfo({ course, setShowInfo, setCourses }) {
	const actionBack = () => {
		setShowInfo(false);
		setCourses(data);
	};
	return (
		<>
			<h2>{course.title}</h2>
			<div>
				<div>
					<h3>Description:</h3>
					<p>{course.description}</p>
				</div>
				<div>
					<ul>
						<li>
							<b>ID:</b>
							{course.id}
						</li>
						<li>
							<b>Duration:</b>
							{getCourseDuration(course.duration)}
						</li>
						<li>
							<b>Created:</b>
							{formatCreationDate(course.creationDate)}
						</li>
						<li>
							<b>Authors:</b>
							{formatAuthorsData(course.authors)}
						</li>
					</ul>
					<Button text='Back' onClick={actionBack} />
				</div>
			</div>
		</>
	);
}
