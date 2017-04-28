import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { signUserUp } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../login/login.css'

const mapStateToProps = (state, ownProps) => {
  return {
    signupFormData: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ signUserUp }, dispatch);
};

class SignupForm extends Component{
  render(props) {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Route render={({ history }) => (
      <form id="signup-form" onSubmit={(event) => {
        event.preventDefault();
        let x = this.props.signupFormData.signup.values;
        console.log(x);
        this.props.signUserUp(x.email, x.firstName, x.lastName, x.password, () => {
          history.push('/signup/step1');
        });
      }}>
      <Link to="/"><div id="close-login"><img
    src={require('../../img/white-icon.png')}
     alt="close window"
   /></div></Link>
        <div className="ui grid">
          {/* <div className="login-field signup-field column five wide">
            <label>E-mail</label>
            <label>First Name</label>
            <label>Last Name</label>
            <label>Password</label>
            <label>Confirm Password</label>


          </div> */}

          <div className="login-field signup-field column sixteen wide">

            <div>
              <Field name="email" component="input" type="email" placeholder="Email" required />
            </div>
            <div>
              <Field name="firstName" component="input" type="text" placeholder="First Name" required />
            </div>
            <div>
              <Field name="lastName" component="input" type="text" placeholder="Last Name" required />
            </div>
            <div>
              <Field name="password" component="input" type="password" placeholder="Password" required />
            </div>
            <div>
              <Field name="passwordConfirm" component="input" type="password" placeholder="Confirm Password" required />
            </div>
          </div>

          <div className="login-field column sixteen wide">
            <button type="submit">Sign Up</button>
          </div>
        </div>
        <div id="login-border"></div>
      </form>
      )} />
    );
  }
}

SignupForm = reduxForm ({
  form: 'signup'
})(SignupForm);



export default connect (mapStateToProps, mapDispatchToProps)(SignupForm);
