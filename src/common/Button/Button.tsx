import { FC } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
	text: string;
	onClick?(
		data?: string | React.MouseEvent
	): void | React.MouseEventHandler<HTMLButtonElement> | Promise<void>;
	type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonProps> = ({
	text,
	onClick = undefined,
	type = 'button',
}) => {
	return (
		<button className={styles.button} onClick={onClick} type={type}>
			{text}
		</button>
	);
};
