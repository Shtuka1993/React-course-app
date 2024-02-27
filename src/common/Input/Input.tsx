import * as React from 'react';

interface inputProps {
	placeholder: string;
	value: string;
	name?: string;
	label?: string;
	onChange: (e: React.ChangeEvent) => void;
}

export default function Input(props: inputProps): JSX.Element {
	const { placeholder, value, name = '', label = '', onChange } = props;
	const element: unknown =
		label !== '' && name !== '' ? <label htmlFor={name}>{label}</label> : null;
	return (
		<>
			{element}
			<input
				name={name}
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</>
	);
}
