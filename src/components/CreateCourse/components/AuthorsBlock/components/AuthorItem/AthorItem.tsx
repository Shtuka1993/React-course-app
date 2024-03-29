import { Button } from 'src/common/Button/Button';
import * as text from 'src/constants';

interface AuthorItemProps {
	name: string;
	addAuthor: (id: string) => void;
	removeAuthor: (id: string) => void;
}

export const AuthorItem = (props: AuthorItemProps) => {
	const { name, addAuthor, removeAuthor } = props;

	return (
		<div>
			<span>{name}</span>
			<Button text={'add'} onClick={addAuthor} />
			<Button text={'remove'} onClick={removeAuthor} />
		</div>
	);
};
