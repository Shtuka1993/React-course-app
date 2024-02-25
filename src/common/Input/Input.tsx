import * as React from 'react';
import Button from 'src/common/Button/Button';

export default function Input({ placeholder }) {
	return (
		<>
			<input type='text' placeholder={placeholder} />
		</>
	);
}
