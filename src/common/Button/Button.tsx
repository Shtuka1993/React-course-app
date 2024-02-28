import * as React from 'react';

import styles from './Button.module.css';

interface buttonProps {
	text: string;
	onClick?(): void | React.MouseEvent<HTMLButtonElement>;
}

export default function Button(props: buttonProps): JSX.Element {
	const action = props.onClick !== undefined ? props.onClick : undefined;
	return (
		<button className={styles.button} onClick={action}>
			{props.text}
		</button>
	);
}
