import { useState } from 'react';
import { Button } from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';
import * as text from 'src/constants';

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
				<form>
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
					</div>
					<div>
						<h2>{text.AUTHORS}</h2>
					</div>
					<div>
						<Button text={text.CANCEL} onClick={cancel} />
						<Button text={text.CREATE} onClick={submit} />
					</div>
				</form>
			</div>
		</div>
	);
};
