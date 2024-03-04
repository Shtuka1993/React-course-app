import * as types from 'src/types';

import { FC } from 'react';

import styles from './Button.module.css';

export const Button: FC<types.ButtonProps> = ({ text, onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{text}
		</button>
	);
};
