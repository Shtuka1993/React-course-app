import styles from './Input.module.css';
import React, { ReactElement } from 'react';

type InputState = object;

interface InputProps {
	placeholder: string;
	value: string;
	name?: string;
	label?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	required?: boolean;
}

class Input extends React.Component<InputProps, InputState> {
	constructor(props: InputProps) {
		super(props);
	}

	render() {
		const {
			placeholder,
			value,
			name = '',
			label = '',
			onChange,
			type = 'text',
			required = false,
		} = this.props;
		const element: ReactElement =
			label !== '' && name !== '' ? (
				<label htmlFor={name}>{label}</label>
			) : null;

		return (
			<>
				{element}
				<input
					className={styles.input}
					name={name}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					required={required}
				/>
			</>
		);
	}
}

export default Input;
