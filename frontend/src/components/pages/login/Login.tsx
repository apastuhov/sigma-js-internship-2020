import Box from '@material-ui/core/Box';
import axios from 'axios';
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom';
import GoogleLogo from '../../../images/google-login.svg';
import Logo from '../../../images/logo-login.svg';
import { getUserByMail } from '../../../services/apiUserService';
import { saveUserToStorage } from '../../../services/localStorageService';
import Footer from '../../shared/footer/Footer';
import Tile from '../../shared/tile/Tile';
import './login.scss';

const url = 'http://localhost:8000';

const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function responseGoogle(response: any): void {
    axios({
      method: 'POST',
      url: `${url}/api/googleLogin`,
      data: { tokenID: response.tokenId }
    });
    // redirect to registration if mail doesn`t exist in a database, if found redirect to profile and save to localstorage
    const mail = response.tt.$t;
    const user: any = getUserByMail(mail);
    user.id && saveUserToStorage(user);
    user.id && setIsLoggedIn(true);
  }
  return (
    <div className="login-wrapper">
      <Tile>
        <Box boxShadow={2} className="login-tile">
          <div className="logo-wrapper">
            <img src={Logo} alt="logo" className="logo" />
            <h1 className="login-h1">Meetlang</h1>
          </div>
          <p className="login-p">Login or register</p>
          <GoogleLogin
            clientId="341926743470-9blkj1v16puk169ke04vsk7qigumb8tb.apps.googleusercontent.com"
            render={props => (
              <button onClick={props.onClick} disabled={props.disabled} className="login-btn">
                <div className="google-logo-container">
                  <img src={GoogleLogo} alt="google-logo" />
                </div>
                <p className="login-btn-link">Sign in with google</p>
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </Box>
      </Tile>
      <Footer />
      {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/register" />}
    </div>
  );
};

export default Login;
