import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import { Field, reduxForm } from 'redux-form';
import { submitBasicUserInfo } from '../../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import styles from '../forms.css';
import styles2 from './basic-info-form.css';



const mapStateToProps = (state, ownProps) => {
  return {
    basicInfoFormData: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ submitBasicUserInfo }, dispatch);
};


export class BasicInfoForm extends Component{

  componentDidMount() {
    if (localStorage.getItem('showPword') === 't') {
      alert('Thank you for signing up to levelwater.io with Google!  If you want to sign in traditionally, sign in with your gmail address and your password.  Your password is your first name on google followed by eight 9s.  The ability to change your password is coming soon!');    }
  }


  render() {
    return (
      <Route render={({ history }) => (
        <div id="basic-info-form" className="form-step">
          <SignUpStep step="1" />
          <div className="ui grid">
            <div className="column sixteen wide">
              <h3>
                Basic Water System Information
              </h3>
            </div>
          </div>

          <form id="step1" onSubmit={(event) => {
            event.preventDefault();
            let x = this.props.basicInfoFormData.basicInfo.values;
            this.props.submitBasicUserInfo(
              x.pws_name,
              x.pws_id,
              x.population,
              x.connections,
              () => {
                history.push('/signup/step2');
              }
            );
          }}>
            <div className="ui grid">
              <div className="column seven wide computer sixteen wide tablet">
                <label>Water System Name:</label>
              </div>

              <div className="column nine wide computer sixteen wide tablet"><Field name="pws_name" component="input" type="text" required /></div>

              <div className="column seven wide computer sixteen wide tablet"><label>PWS Number:</label></div>

              <div className="column nine wide computer sixteen wide tablet"><Field name="pws_id" component="input" type="number" required /></div>

              <div className="column seven wide computer sixteen wide tablet"><label>Number Of Connections:</label></div>

              <div className="column nine wide computer sixteen wide tablet"><Field name="connections" component="input" type="number" required /></div>

              <div className="column seven wide computer sixteen wide tablet"><label>Population Served:</label></div>









              <div className="column nine wide">
                <Field name="population" component="input" type="number" required />
              </div>

            </div>
              <div>
                <div className="ui grid">
                  <div className="column four wide"></div>
                  <div className="column twelve wide" id="basic-info-submit-button">
                    <button type='submit' className="ui button" >Continue to Financial Information &gt;</button>
                  </div>
                </div>
              </div>
          </form>
        </div>
      )} />
    );
  }
}

BasicInfoForm = reduxForm({
  form: 'basicInfo'
})(BasicInfoForm);


export default connect (mapStateToProps, mapDispatchToProps)(BasicInfoForm);
