import * as React from 'react';

import { Logo } from './components/Logo/Logo';
import Button from '../../common/Button/Button';

import { LOGOUT } from 'src/constants';

export default function Header() {
	return (
		<div className='header'>
			<Logo />
			<Button text={LOGOUT} />
		</div>
	);
}
