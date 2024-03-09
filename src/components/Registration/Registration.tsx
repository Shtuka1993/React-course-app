import React, { FormEvent } from 'react';
import { Button } from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';
import * as text from 'src/constants';
import { Link, Navigate } from 'react-router-dom';

interface RegistrationState {
	name: string;
	email: string;
	password: string;
	hasErrors: boolean;
	registrationDone: boolean;
	errors: string;
}

class Registration extends React.Component<object, RegistrationState> {
	constructor(props: object) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			hasErrors: false,
			errors: '',
			registrationDone: false,
		};
	}

	registrationDone = false;

	url = 'http://localhost:4000/register';

	submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		this.sendRequest();
	};

	sendRequest = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: `${this.state.name}`,
				email: `${this.state.email}`,
				password: `${this.state.password}`,
			}),
		};
		fetch(this.url, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.successful) {
					this.setState({ registrationDone: true });
				} else {
					this.setState({ hasErrors: true, errors: data.errors.join() });
				}
			});
	};

	validateName = function (value: string): boolean {
		return !text.FORBIDDEN_SYMBOLS.test(value);
	};

	processName = function (value: string): void {
		if (this.validateName(value)) {
			this.setState({ name: value });
		}
	};

	validateEmail = function (value: string): boolean {
		return !text.FORBIDDEN_EMAIL_SYMBOLS.test(value);
	};

	processEmail = function (value: string): void {
		if (this.validateEmail(value)) {
			this.setState({ email: value });
		}
	};

	processPassword = function (value: string): void {
		this.setState({ password: value });
	};

	render() {
		const errorsBlock = this.state.hasErrors ? (
			<p>{this.state.errors}</p>
		) : null;

		return !this.registrationDone ? (
			<div>
				<div>
					<h2>{text.REGISTRATION}</h2>
					<form onSubmit={this.submit}>
						<Input
							placeholder={text.NAME}
							name={text.NAME}
							value={this.state.name}
							required={true}
							onChange={({ target }) => {
								this.processName(target.value);
							}}
						/>
						<Input
							placeholder={text.EMAIL}
							name={text.EMAIL}
							value={this.state.email}
							required={true}
							onChange={({ target }) => {
								this.processEmail(target.value);
							}}
						/>
						<Input
							placeholder={text.PASSWORD}
							name={text.PASSWORD}
							value={this.state.password}
							required={true}
							onChange={({ target }) => {
								this.processPassword(target.value);
							}}
							minLength={text.PASSWORD_LENGHT}
						/>
						{errorsBlock}
						<Button text={text.LOGIN} type='submit' />
						<p>
							{text.LOGIN_REGISTRATION_HINT}
							<Link to='/login'>{text.LOGIN}</Link>
						</p>
					</form>
				</div>
			</div>
		) : (
			<Navigate to='/login' />
		);
	}
}

export default Registration;
