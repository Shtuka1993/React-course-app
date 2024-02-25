import * as React from 'react';
import Button from 'src/common/Button/Button';

export default function EmptyCourseList() {
	return (
		<div>
			<h3>Your List is Empty</h3>
			<p>Please use 'Add New Course' button to add your first course</p>
			<Button text='Add new course' />
		</div>
	);
}
