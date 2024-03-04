import * as types from 'src/types';

import styles from './Input.module.css';
import { ReactElement } from 'react';

export default function Input(props: types.InputProps): JSX.Element {
	const { placeholder, value, name = '', label = '', onChange } = props;
	const element: ReactElement =
		label !== '' && name !== '' ? <label htmlFor={name}>{label}</label> : null;
	return (
		<>
			{element}
			<input
				className={styles.input}
				name={name}
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</>
	);
}
