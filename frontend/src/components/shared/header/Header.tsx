import Box from '@material-ui/core/Box';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { clearStorage, getUserFromStorage } from '../../../services/sessionStorageService';
import { IUser } from '../../interfaces/Interface';
import './Header.scss';
import logo from './logo.png';

const Header: React.FC = () => {
  const [menuClass, setMenuClass] = useState('');
  const [user, setUser] = useState<IUser>();

  const toggleMenu = () => {
    setMenuClass(Boolean(menuClass) ? '' : 'dropdown-menu-active');
  };

  useEffect(() => {
    const user = getUserFromStorage();
    setUser(user);
  }, []);

  return (
    <header>
      <div className="wrapper">
        <Link to={`/user/${user?._id}`}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <nav>
          <Link to="/search">
            <SearchIcon style={{ color: '#fff' }} />
            <div>Search</div>
          </Link>
          <Link to={`/chat/${user?._id}/dialogs`}>
            <MailOutlineIcon style={{ color: '#fff' }} />
          </Link>
          <div className="avatar">
            <img onClick={toggleMenu} src={user?.avatar} alt="profile" />
          </div>
          <Box boxShadow={2} className={`dropdown-menu ${menuClass}`}>
            <Link to="/settings">Settings</Link>
            <Link to="/" onClick={clearStorage}>
              Log Out
            </Link>
          </Box>
        </nav>
      </div>
    </header>
  );
};

export default Header;
