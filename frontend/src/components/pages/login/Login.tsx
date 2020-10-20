import React from 'react';
import Logo from '../../../images/logo-login.svg';
import GoogleLogo from '../../../images/google-login.svg';
import './login.scss';
import Footer from '../../shared/footer/Footer';
import Tile from '../../shared/tile/Tile';
import Box from '@material-ui/core/Box';

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
            <p className="login-btn-p">Sign in with google</p>
          </button>
        </Box>
      </Tile>
      <Footer />
    </div>
  );
};

export default Login;
