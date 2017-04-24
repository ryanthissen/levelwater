import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { signUserUp } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.signupForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ signUserUp }, dispatch);
};

class SignupForm extends Component{
  render(props) {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form id="signup-form" onSubmit={(event) => {
        event.preventDefault();
        let x = this.props;
        this.props.signUserUp(x.email, x.firstName, x.lastName, x.password);
      }}>
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
              <Field name="email" component="input" type="email" />
            </div>
            <div>
              <Field name="firstName" component="input" type="text" />
            </div>
            <div>
              <Field name="lastName" component="input" type="text" />
            </div>
            <div>
              <Field name="password" component="input" type="password" />
            </div>
            <div>
              <Field name="passwordConfirm" component="input" type="password" />
            </div>
          </div>

          <div className="login-field column sixteen wide">
            <button type="submit">Sign Up</button>
          </div>
        </div>
        <div id="login-border"></div>
      </form>
    )
  }
}

SignupForm = reduxForm ({
  form: 'signup'
})(SignupForm);



export default connect (mapStateToProps, mapDispatchToProps)(SignupForm);
