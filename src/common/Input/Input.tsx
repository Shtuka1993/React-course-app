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
	minLength?: number;
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
			minLength = 0,
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
					minLength={minLength}
				/>
			</>
		);
	}
}

export default Input;
