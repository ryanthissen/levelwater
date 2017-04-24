import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => (
  <form id="signup-form">
    <div id="close-login"><Link to="/">X</Link></div>
    <div className="ui grid">
      <div className="login-field signup-field column five wide">
        <label>E-mail</label>
        <label>First Name</label>
        <label>Last Name</label>
        <label>Password</label>
        <label>Confirm Password</label>


      </div>

      <div className="login-field signup-field column eleven wide">

        <div>
          <input></input>
        </div>
        <div>
          <input></input>
        </div>
        <div>
          <input></input>
        </div>
        <div>
          <input></input>
        </div>
        <div>
          <input></input>
        </div>
      </div>

      <div className="login-field column sixteen wide">
        <button type="submit">Sign Up</button>
      </div>
    </div>
    <div id="login-border"></div>
  </form>
);

export default SignupForm;
