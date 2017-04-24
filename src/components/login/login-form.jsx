import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component{
  render() {
    return (
      <form id="login-form">
        <div id="close-login"><Link to="/">X</Link></div>
        <div className="ui grid">
          <div className="login-field column five wide">
            <label>E-mail</label>
            <label>Password</label>

          </div>

          <div className="login-field column eleven wide">

            <div>
              <Field name="email" component="input" type="email" />
            </div>
            <div>
              <Field name="password" component="input" type="password" />
            </div>
          </div>

          <div className="login-field column sixteen wide">
            <button type="submit">Sign In</button>
          </div>
        </div>
        <div id="login-border"></div>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);


export default LoginForm;
