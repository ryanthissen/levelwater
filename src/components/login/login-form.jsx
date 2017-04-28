import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { logUserIn } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './login.css';

const mapStateToProps = (state, ownProps) => {
  return {
    loginFormData: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ logUserIn }, dispatch);
};


class LoginForm extends Component{
  render(props) {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form id="login-form" onSubmit={(event) => {
        event.preventDefault();
        let x = this.props.loginFormData.login.values;
        this.props.logUserIn(x.email, x.password);
      }}>
        <Link to="/"><div id="close-login"><img
      src={require('../../img/white-icon.png')}
       alt="close window"
     /></div></Link>
        <div className="ui grid">
          {/* <div className="login-field column five wide">
            <label>E-mail</label>
            <label>Password</label>

          </div> */}

          <div className="login-field column sixteen wide">

            <div>
              <Field name="email" component="input" type="email" placeholder="Email Address" required />
            </div>
            <div>
              <Field name="password" component="input" type="password" placeholder="Password" required />
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


export default connect (mapStateToProps, mapDispatchToProps)(LoginForm);
