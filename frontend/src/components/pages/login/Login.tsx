import Box from '@material-ui/core/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../../images/google-login.svg';
import Logo from '../../../images/logo-login.svg';
import { saveUserToStorage } from '../../../services/localStorageService';
import user from '../../mocks/user-mock.json';
import Footer from '../../shared/footer/Footer';
import Tile from '../../shared/tile/Tile';
import './login.scss';

const Login: React.FC = () => {
  return (
    <div className="login-wrapper">
      <Tile>
        <Box boxShadow={2} className="login-tile">
          <div className="logo-wrapper">
            <img src={Logo} alt="logo" className="logo" />
            <h1 className="login-h1">Meetlang</h1>
          </div>
          <p className="login-p">Login or register</p>
          <button className="login-btn">
            <div className="google-logo-container">
              <img src={GoogleLogo} alt="google-logo" />
            </div>
            <Link to='/register' className="login-btn-link" onClick={() => saveUserToStorage(user)}>Sign in with google</Link>
          </button>
        </Box>
      </Tile>
      <Footer />
    </div>
  );
};

export default Login;