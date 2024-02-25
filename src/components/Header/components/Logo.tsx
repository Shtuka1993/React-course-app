import * as React from 'react';

import logo from './logo.png';

const logoWidth = 42;

export default function Logo() {
	return (
		<>
			<img src={logo} alt='Logo' width={logoWidth} />
		</>
	);
}
