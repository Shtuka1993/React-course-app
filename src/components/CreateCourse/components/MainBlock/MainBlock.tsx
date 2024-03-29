import { FC } from 'react';
import Input from 'src/common/Input/Input';
import * as text from 'src/constants';

interface MainBlockProps {
	title: string;
	setTitle: (text: string) => void;
}

export const MainBlock: FC<MainBlockProps> = ({ title, setTitle }) => {
	return (
		<div>
			<h3>{text.MAIN}</h3>
			<Input
				placeholder={text.TITLE}
				name={text.TITLE}
				onChange={({ target }) => {
					setTitle(target.value);
				}}
				value={title}
			/>
		</div>
	);
};
