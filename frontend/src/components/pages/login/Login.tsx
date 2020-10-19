import React from 'react';
import Logo from '../../../images/logo-login.svg';
import GoogleLogo from '../../../images/google-login.svg';
import './login.scss';
import Footer from '../../shared/footer/Footer';

const Login: React.FC = () => {
  return (
    <div>
      <div className="login-container">
        <div className="logo-wrapper">
          <img src={Logo} alt="logo" className="logo" />
          <h1>Meetlang</h1>
        </div>
        <p className="login-p">Login or register</p>
        <button className="login-btn">
          <div className="google-logo-container">
            <img src={GoogleLogo} alt="google-logo" />
          </div>
          <p className="login-btn-p">Sign in with google</p>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
