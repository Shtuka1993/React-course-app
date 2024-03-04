import styles from './EmptyCourseList.module.css';

import { Button } from 'src/common/Button/Button';

import {
	EMPTY_LIST_TITLE,
	EMPTY_LIST_DESCRIPTION,
	ADD_COURSE_BTN,
} from 'src/constants';

export default function EmptyCourseList() {
	return (
		<div className={styles.emptyCourseList}>
			<h3>{EMPTY_LIST_TITLE}</h3>
			<p>{EMPTY_LIST_DESCRIPTION}</p>
			<Button text={ADD_COURSE_BTN} />
		</div>
	);
}
