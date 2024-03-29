import { FC, useState } from 'react';

import Input from 'src/common/Input/Input';
import { Button } from 'src/common/Button/Button';

export const AuthorForm: FC = () => {
	const [author, setAuthor] = useState('');

	const url = '';

	const addAuthor = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: `${author}` }),
		};
		fetch(url, requestOptions).then((response) => response.json());
	};

	const setAuthorName = (val: string) => {
		setAuthor(val);
	};

	return (
		<>
			<Input
				placeholder={'Add author'}
				value={author}
				onChange={({ target }) => {
					setAuthorName(target.value);
				}}
			/>
			<Button text={'Crete'} onClick={addAuthor} />
		</>
	);
};
