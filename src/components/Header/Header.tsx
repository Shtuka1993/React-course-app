import * as React from 'react';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

export default function Header() {
	return (
		<>
			<Logo />
			<Button text='Logout' />
		</>
	);
}
