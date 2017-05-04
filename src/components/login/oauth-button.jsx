import React from 'react';
import axios from 'axios';

const oAuthURL = 'http://levelwater-server.herokuapp.com/auth/google';



const OAuthButton = () => (
  <div className="o-auth-button">
    <a href={oAuthURL}><img
        src={require('../../img/fb-login.png')}
         alt="Login With Facebook"
       /></a>
  </div>
);

export default OAuthButton;
