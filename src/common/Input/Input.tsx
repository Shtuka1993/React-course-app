import * as React from 'react';

interface inputProps {
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent) => void;
}

export default function Input(props: inputProps): JSX.Element {
	return (
		<>
			<input
				type='text'
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
			/>
		</>
	);
}
