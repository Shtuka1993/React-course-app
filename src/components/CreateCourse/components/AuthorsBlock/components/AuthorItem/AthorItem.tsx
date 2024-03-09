import React from 'react';
import * as text from 'src/constants';

interface AuthorItemProps {
	name: string;
	addAuthor: unknown;
	removeAuthor: unknown;
}

export const AuthorItem = (props: AuthorItemProps) => {
	const { name, addAuthor, removeAuthor } = props;

	return (
		<div>
			<span>{name}</span>
			<span className='add'></span>
			<span className='remove'></span>
		</div>
	);
};
