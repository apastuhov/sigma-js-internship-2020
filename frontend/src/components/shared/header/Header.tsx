import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';
import './Header.scss';
import logo from './logo.png';

const Header: React.FC = () => {
  const [menuClass, setMenuClass] = useState('');

  const pathImage = '/images/profiles/';
  const iconName = 'icon_0.png';

  const toggleMenu = () => {
    setMenuClass(Boolean(menuClass) ? '' : 'dropdown-menu-active');
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
          <img onClick={toggleMenu} src={`${pathImage}${iconName}`} alt="profile" className="logo" />
          <div className={`dropdown-menu ${menuClass}`}>
            <Link to="/settings">Settings</Link>
            <Link to="/login">Log Out</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
