import React from 'react';
import GoogleLogo from '../../../images/google-login.svg';
import Logo from '../../../images/logo-login.svg';
import { saveUserToStorage } from '../../../services/localStorageService';
import user from '../../mocks/user-mock.json';
import Footer from '../../shared/footer/Footer';
import Tile from '../../shared/tile/Tile';
import './login.scss';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const url = 'http://localhost:8000';

function responseGoogle(response: any): void {
  axios({
    method: 'POST',
    url: `${url}/api/googleLogin`,
    data: { tokenID: response.tokenId }
  });
  saveUserToStorage(user)
}

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
    </div>
  );
};

export default Login;
