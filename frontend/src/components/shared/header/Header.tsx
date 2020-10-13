import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from './logo.png';

const Header: React.FC = () => {
	const [showMenu, setMenu] = useState('');

	const toggleMenu = () => {
		setMenu(showMenu ? '' : 'dropdown-menu-active');
	};

	return (
		<header>
			<div className="container">
				<Link to="/">
					<img src={logo} alt="logo" className="logo" />
				</Link>
				<nav>
					<Link to="/search">
						<SearchIcon style={{ color: '#fff' }} />
						<div>Search</div>
					</Link>
					<Link to="/chat">
						<MailOutlineIcon style={{ color: '#fff' }} />
					</Link>
					<img onClick={toggleMenu} src={'/img/profiles/icon_0.png'} alt="profile" className="logo" />
					<div className={`dropdown-menu ${showMenu}`}>
						<Link to="/settings">Settings</Link>
						<Link to="/login">Log Out</Link>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
