import * as React from 'react';

import Button from 'src/common/Button/Button';

export default function CourseInfo({
	title,
	description,
	id,
	duration,
	created,
	authors,
}) {
	return (
		<>
			<h2>{title}</h2>
			<div>
				<div>
					<h3>Description:</h3>
					<p>{description}</p>
				</div>
				<div>
					<ul>
						<li>
							<b>ID:</b>
							{id}
						</li>
						<li>
							<b>Duration:</b>
							{duration}
						</li>
						<li>
							<b>Created:</b>
							{created}
						</li>
						<li>
							<b>Authors:</b>
							{authors}
						</li>
					</ul>
					<Button text='Back' />
				</div>
			</div>
		</>
	);
}
