import React from 'react';
import axios from 'axios';

const oAuthURL = 'http://levelwater-server.herokuapp.com/auth/google';



const OAuthButton = () => (
  <div className="o-auth-button">
    <a href={oAuthURL}><img
        src={require('../../img/google-oauth-button.png')}
         alt="Login With Google"
       /></a>
  </div>
);

export default OAuthButton;
