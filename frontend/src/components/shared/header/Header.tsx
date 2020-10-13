import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from './logo.png';

const Header: React.FC = () => {
	const [showMenu, setMenu] = useState('');

	const toggleMenu = () => {
		setMenu(showMenu ? '' : 'menu-active');
	};

	return (
		<header className="header">
			<div className="container">
				<div className="wrapper">
					<Link to="/">
						<img src={logo} alt="logo" className="logo" />
					</Link>
					<nav className="navbar">
						<Link to="/search">
							<SearchIcon style={{ color: '#fff' }} />
							<div>Search</div>
						</Link>
						<Link to="/chat">
							<MailOutlineIcon style={{ color: '#fff' }} />
						</Link>
						<img onClick={toggleMenu} src={process.env.PUBLIC_URL + '/img/profiles/icon_0.png'} className="logo" />
						<ul className={`menu ${showMenu}`}>
							<li className="menu-item">
								<Link to="/settings">Settings</Link>
							</li>
							<li className="menu-item">
								<Link to="/login">Log Out</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
