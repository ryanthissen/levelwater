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
              <Field name="email" component="input" type="email" placeholder="Email" />
            </div>
            <div>
              <Field name="firstName" component="input" type="text" placeholder="First Name" />
            </div>
            <div>
              <Field name="lastName" component="input" type="text" placeholder="Last Name" />
            </div>
            <div>
              <Field name="password" component="input" type="password" placeholder="Password" />
            </div>
            <div>
              <Field name="passwordConfirm" component="input" type="password" placeholder="Confirm Password" />
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
