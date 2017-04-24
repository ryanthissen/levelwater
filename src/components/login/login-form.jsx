import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => (
  <form id="login-form">
    <div id="close-login"><Link to="/">X</Link></div>
    <div className="ui grid">
      <div className="login-field column five wide">
        <label>E-mail</label>
        <label>Password</label>

      </div>

      <div className="login-field column eleven wide">

        <div>
          <input></input>
        </div>
        <div>
          <input></input>
        </div>
      </div>

      <div className="login-field column sixteen wide">
        <button type="submit">Sign In</button>
      </div>
    </div>
    <div id="login-border"></div>
  </form>
);

export default LoginForm;
