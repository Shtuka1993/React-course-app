import styles from './Header.module.css';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import { LOGOUT } from 'src/constants';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
	const navigate = useNavigate();
	const logoutAction = () => {
		localStorage.clear();
		navigate('/login');
	};
	const location = useLocation();
	const logout = !['/login', '/registration'].includes(location.pathname) ? (
		<div>
			<Button onClick={logoutAction} text={LOGOUT} />
		</div>
	) : null;

	return (
		<div className={styles.header}>
			<Logo />
			<b>{localStorage.getItem('name')}</b>
			{logout}
		</div>
	);
}
