import Box from '@material-ui/core/Box';
import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import GoogleLogo from '../../../images/google-login.svg';
import Logo from '../../../images/logo-login.svg';
import { processGoogleResponse } from '../../../services/sessionService';
import { getUserFromStorage } from '../../../services/sessionStorageService';
import { onConnect } from '../../../socket/dialogSocket';
import Footer from '../../shared/footer/Footer';
import Tile from '../../shared/tile/Tile';
import './login.scss';

const Login: React.FC = () => {
  const history = useHistory();
  const handleGoogleResponse = async (res: any) => {
    const result = await processGoogleResponse(res);
    if (result) {
      history.push(`/user/${result._id}`);
    } else {
      sessionStorage.setItem('loginedUser', JSON.stringify(res.profileObj.email));
      history.push('/register');
    }
  };

  useEffect(() => {
    try {
      const user = getUserFromStorage();
      if (user?._id) {
        onConnect(user._id);
        history.push(`/user/${user._id}`);
      }
    } catch (e) {
      console.log(e);
    }
  }, [history]);

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
                <p className="login-btn-link">SIGN IN WITH GOOGLE</p>
              </button>
            )}
            buttonText="Login"
            onSuccess={handleGoogleResponse}
            // in case of fail we need to send to google-oauth
            onFailure={handleGoogleResponse}
            cookiePolicy={'single_host_origin'}
          />
        </Box>
      </Tile>
      <Footer />
    </div>
  );
};

export default Login;
