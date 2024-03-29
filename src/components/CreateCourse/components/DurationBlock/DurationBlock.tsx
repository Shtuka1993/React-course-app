import { FC, useEffect } from 'react';
import Input from 'src/common/Input/Input';
import * as text from 'src/constants';
import { getCourseDuration } from 'src/helpers/getCourseDuration';

interface DurationProps {
	duration: string;
	setDuration: (text: string) => void;
}

export const DurationBlock: FC<DurationProps> = ({ duration, setDuration }) => {
	return (
		<div>
			<h2>{text.DURATION}</h2>
			<Input
				placeholder={text.DURATION}
				name={text.DURATION}
				onChange={({ target }) => {
					setDuration(target.value);
				}}
				value={duration}
			/>
			<span>{getCourseDuration(Number(duration))}</span>
		</div>
	);
};
