import { FC } from 'react';
import * as text from 'src/constants';

interface DescriptionBlockProps {
	description: string;
	setDescription: (text: string) => void;
}

export const DescriptionBlock: FC<DescriptionBlockProps> = ({
	description,
	setDescription,
}) => {
	return (
		<div>
			<label htmlFor={text.DESCRIPTION}>{text.DESCRIPTION}</label>
			<textarea
				name={text.DESCRIPTION}
				placeholder={text.DESCRIPTION}
				onChange={({ target }) => {
					setDescription(target.value);
				}}
				value={description}
			/>
		</div>
	);
};
