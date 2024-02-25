import * as React from 'react';

import Input from 'src/common/Input/Input';
import Button from 'src/common/Button/Button';

export default function CourseCard() {
	return (
		<>
			<Input placeholder='Course' />
			<Button text='Search' />
		</>
	);
}
