import { useState } from 'react';
import { Button } from 'src/common/Button/Button';
import * as text from 'src/constants';
import { MainBlock } from './components/MainBlock/MainBlock';
import { DescriptionBlock } from './components/DescriptionBlock/DescriptionBlock';
import { DurationBlock } from './components/DurationBlock/DurationBlock';
import { AuthorsBlock } from './components/AuthorsBlock/AuthorsBlock';

interface CreateCourseProps {
	id?: string;
}

export const CreateCourse = (props: CreateCourseProps) => {
	const { id } = props;

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');
	const [authors, setAuthors] = useState([]);

	const submit = () => {
		console.log(title, description, duration, authors);
		alert('Do some course stuff!!!...');
	};

	const cancel = () => {
		setTitle('');
		setDescription('');
		setDuration('');
		setAuthors([]);
	};

	return (
		<div>
			<div>
				<h2>{text.CREATE_EDIT_COURSE}</h2>
				<form onSubmit={submit}>
					<div>
						<MainBlock title={title} setTitle={setTitle} />
						<DescriptionBlock
							description={description}
							setDescription={setDescription}
						/>
					</div>
					<DurationBlock duration={duration} setDuration={setDuration} />
					<AuthorsBlock
						availableAuthors={[]}
						addAuthor={function (id: string): void {
							throw new Error('Function not implemented.');
						}}
						removeAuthor={function (id: string): void {
							throw new Error('Function not implemented.');
						}}
					/>
					<div>
						<Button text={text.CANCEL} onClick={cancel} />
						<Button text={text.CREATE} type='submit' />
					</div>
				</form>
			</div>
		</div>
	);
};
