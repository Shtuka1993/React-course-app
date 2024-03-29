import React from 'react';
import { Button } from 'src/common/Button/Button';
import * as text from 'src/constants';
import { AuthorItem } from './components/AuthorItem/AthorItem';
import { AuthorForm } from './components/AuthorForm/AuthorForm';

interface AuthorsBlockProps {
	availableAuthors: string[];
	addAuthor: (id: string) => void;
	removeAuthor: (id: string) => void;
}

export const AuthorsBlock = (props: AuthorsBlockProps) => {
	const { availableAuthors, addAuthor, removeAuthor } = props;

	return (
		<div>
			<div>
				<h2>{text.AUTHORS}</h2>
			</div>
			<AuthorForm />
			{availableAuthors.map((author) => {
				return (
					<AuthorItem
						name={author}
						addAuthor={addAuthor}
						removeAuthor={removeAuthor}
					/>
				);
			})}
		</div>
	);
};
