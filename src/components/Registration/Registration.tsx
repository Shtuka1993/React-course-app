import React from 'react';
import { Button } from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';
import * as text from 'src/constants';
import * as types from 'src/types';
import { Link } from 'react-router-dom';

class Registration extends React.Component {
	constructor(props: object) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
		};
	}

	submit() {
		console.log(this.state);
		alert('Do register stuff!!!...');
	}

	render() {
		return (
			<div>
				<div>
					<h2>{text.REGISTRATION}</h2>
					<form>
						<Input
							placeholder={text.NAME}
							name={text.NAME}
							value={this.state.name}
						/>
						<Input
							placeholder={text.EMAIL}
							name={text.EMAIL}
							value={this.state.email}
						/>
						<Input
							placeholder={text.PASSWORD}
							name={text.PASSWORD}
							value={this.state.password}
						/>
						<Button text={text.LOGIN} />
						<p>
							{text.LOGIN_REGISTRATION_HINT}
							<Link to='/login'>{text.LOGIN}</Link>
						</p>
					</form>
				</div>
			</div>
		);
	}
}

export default Registration;
