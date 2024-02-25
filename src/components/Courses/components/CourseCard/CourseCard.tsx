import * as React from 'react';

import Button from 'src/common/Button/Button';

export default function CourseCard({
	title,
	description,
	authors,
	duration,
	created,
}) {
	return (
		<>
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div>
				<ul>
					<li>
						<b>Authors:</b>
						{authors}
					</li>
					<li>
						<b>Duration:</b>
						{duration}
					</li>
					<li>
						<b>Created:</b>
						{created}
					</li>
				</ul>
				<Button text='Show course' />
			</div>
		</>
	);
}
