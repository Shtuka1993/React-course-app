import * as React from 'react';

import logo from './logo.png';

import { LOGO } from 'src/constants';

const logoWidth = 42;

export const Logo = () => <img src={logo} alt={LOGO} width={logoWidth} />;
