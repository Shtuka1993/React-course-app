import { FormEvent, useEffect, useState } from 'react';

import { Button } from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';

import { Link, useNavigate } from 'react-router-dom';

import * as text from 'src/constants';

interface LoginState {
	email: string;
	password: string;
	tocken: string;
}

const Login = () => {
	const url = 'http://localhost:4000/login';

	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [tocken, setTocken] = useState('');

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		sendRequest();
	};
	const sendRequest = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: `${email}`, password: `${password}` }),
		};
		fetch(url, requestOptions)
			.then((response) => response.json())
			.then((data) => setTocken(data.result));
	};

	const processEmail = (value: string) => {
		setEmail(value);
	};

	const processPassword = (value: string) => {
		setPassword(value);
	};

	useEffect(() => {
		const key = 'tocken';
		const tockenData = localStorage.getItem(key);
		console.log(tockenData);
		console.log(localStorage);
		if (tockenData) {
			navigate('/courses');
		} else {
			if (tocken) {
				localStorage.setItem(key, tocken);
				navigate('/courses');
			}
		}
	}, [tocken]);

	return (
		<div>
			<div>
				<h2>{text.LOGIN}</h2>
				<form onSubmit={submit}>
					<Input
						placeholder={text.EMAIL}
						name={text.EMAIL}
						required={true}
						onChange={({ target }) => {
							processEmail(target.value);
						}}
						value={email}
					/>
					<Input
						placeholder={text.PASSWORD}
						name={text.PASSWORD}
						required={true}
						type='password'
						onChange={({ target }) => {
							processPassword(target.value);
						}}
						value={password}
					/>
					<Button text={text.LOGIN} type='submit' />
					<p>
						{text.LOGIN_REGISTRATION_HINT}
						<Link to='/registration'>{text.REGISTRATION}</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
