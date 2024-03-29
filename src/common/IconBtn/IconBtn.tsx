import { FC } from 'react';

import styles from './Button.module.css';

interface IconBtnProps {
	icon: string;
	onClick?(
		data?: string | React.MouseEvent
	): void | React.MouseEventHandler<HTMLButtonElement> | Promise<void>;
}

export const IconBtn: FC<IconBtnProps> = ({ icon, onClick = undefined }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{icon}
		</button>
	);
};
