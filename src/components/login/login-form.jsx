import React, { Component } from 'react';
import { BrowserRouter as Router,
Route,
Link,
} from 'react-router-dom';
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


export class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.state = { value: null }
  }

  render(props) {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Route render={({ history }) => (
      <form id="login-form" onSubmit={(event) => {
        event.preventDefault();
        let x = this.props.loginFormData.login.values;
        this.props.logUserIn(x.email, x.password, (profileStepCompleted) => {
          if (profileStepCompleted === 'none') {
            history.push('/signup/step1');
          } else if (profileStepCompleted === 'basic') {
            history.push('/signup/step2')
          } else if (profileStepCompleted === 'revenue') {
            history.push('/signup/step3')
          } else if (profileStepCompleted === 'source') {
            history.push('/signup/step4')
          } else if (profileStepCompleted === 'treatment') {
            history.push('/signup/step5')
          } else if (profileStepCompleted === 'storage') {
            history.push('/signup/step6')
          } else if (profileStepCompleted === 'distribution') {
            history.push('/dashboard')
          } else if (profileStepCompleted === 'algorithm') {
            history.push('/dashboard')
          }
        });
        //trying to reset forms, needs work!
        // console.log(this.refs.email.value);
        // this.refs.email.value="";
      }}>
        <Link to="/"><div id="close-login"><img
      src={require('../../img/black-icon.png')}
       alt="close window"
     /></div></Link>
        <div className="ui grid">
          {/* <div className="login-field column five wide">
            <label>E-mail</label>
            <label>Password</label>

          </div> */}

          <div className="login-field column sixteen wide">

            <div>
              <Field name="email" ref="email" component="input" type="email" placeholder="Email Address" required />
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
        )} />
    );
  }
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);


export default connect (mapStateToProps, mapDispatchToProps)(LoginForm);
