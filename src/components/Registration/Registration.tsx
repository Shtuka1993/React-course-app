import React from 'react';
import { Button } from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';
import * as text from 'src/constants';
import { Link, Navigate } from 'react-router-dom';

interface RegistrationState {
	name: string;
	email: string;
	password: string;
}

class Registration extends React.Component<object, RegistrationState> {
	constructor(props: object) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
		};
	}

	registrationDone = false;

	forbiddenSymbols = /[@#$%^&]/;

	url = 'http://localhost:4000/register';

	submit = function () {
		console.log(this.state);
		alert('Do register stuff!!!...');
	};

	sendRequest = function () {
		async () => {
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
				.then(() => {
					console.log('WAT');
					this.registrationDone = true;
				});
		};
	};

	validateName = function (value: string): boolean {
		return !this.forbiddenSymbols.test(value);
	};

	processName = function (value: string): void {
		if (this.validateName(value)) {
			this.setState({ name: value });
		}
	};

	validateEmail = function (value: string): boolean {
		return !this.forbiddenSymbols.test(value);
	};

	processEmail = function (value: string): void {
		if (this.validateEmail(value)) {
			this.setState({ email: value });
		}
	};

	validatePassword = function (value: string): boolean {
		return !this.forbiddenSymbols.test(value);
	};

	processPassword = function (value: string): void {
		if (this.validatePassword(value)) {
			this.setState({ password: value });
		}
	};

	render() {
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
						/>
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
