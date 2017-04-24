import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { logUserIn } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.loginForm
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
        let x = this.props.formData.login.values;
        this.props.logUserIn(x.email, x.password);
      }}>
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


export default connect (mapStateToProps, mapDispatchToProps)(LoginForm);
