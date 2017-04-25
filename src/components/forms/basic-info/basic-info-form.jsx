import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import { Field, reduxForm } from 'redux-form';
import { submitBasicUserInfo } from '../../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.basicInfoForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ submitBasicUserInfo }, dispatch);
};


class BasicInfoForm extends Component{


  render() {
    return (
      <Route render={({ history }) => (
      <div id="basic-info-form" className="form-step">
        <SignUpStep step="1" />
        <div className="ui grid">
          <div className="column sixteen wide">
            <h3>
              Before We Get Started, Please Provide Some Info About Your Water System
            </h3>
          </div>
        </div>

        <form id="step1" onSubmit={(event) => {
          event.preventDefault();
          let x = this.props;
          this.props.submitBasicUserInfo();
          history.push('/signup/step2');

        }}>
          <div className="ui grid">
            <div className="column seven wide">
              <label>Water System Name:</label>
              <label>PWS Number:</label>
              <label>Number Of Connections:</label>
              <label>Customer Population:</label>
            </div>

            <div className="column nine wide">
              <Field name="waterSystemName" component="input" type="text" />
              <Field name="PWSNumber" component="input" type="number" />
              <Field name="numberOfConnections" component="input" type="number" />
              <Field name="customerPop" component="input" type="number" />
            </div>
          </div>
            <div id="basic-info-submit-button">
              <div className="ui grid">
                <div className="column four wide"></div>
                <div className="column twelve wide">
                  <button type='submit' className="ui button">Continue To Revenue & Costs &gt;</button>
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
