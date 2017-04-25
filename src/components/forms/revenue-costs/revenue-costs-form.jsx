import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import { Field, reduxForm } from 'redux-form';
import { submitRevenueCostInfo } from '../../../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import RevenueCostsSubmitButton from './revenue-costs-submit-button';
import SignUpBackButton from '../sign-up-back-button';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.revenueCostsForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ submitRevenueCostInfo }, dispatch);
};

class RevenueCostsForm extends Component {

  render() {
    return (
      <Route render={({ history }) => (
        <div id="revenue-costs-form" className="form-step">
          <SignUpStep step="2" />
          <div className="ui grid">
            <div className="column sixteen wide">
              <h3>Please Enter Revenue, Cost, and Reserve Fund Information From Your Most Recent Year of Operations</h3>
            </div>
          </div>

          <form id="step2" onSubmit={(event) => {
            event.preventDefault();
            let x = this.props;
            this.props.submitRevenueCostInfo();
            history.push('/signup/step3')
          }}>
            <div className="ui grid">
              <div className="column seven wide">
                <label >Average Monthly Rate per Connection:</label>
                <label >Annual Revenue From Water Sales:</label>
                <label >Annual Revenue From Fees And Charges:</label>
                <label >Annual Revenue From Subsidies:</label>
                <label >Total Amount in Reserve Fund:</label>
                <label >Annual Reserve Fund Contribution:</label>
                <label >Annual Personnel Costs:</label>
                <label >Annual Operations Costs:</label>
                <label >Annual Debt Financing:</label>
              </div>

              <div className="column nine wide">
                <Field name="ratePerConnection" component="input" type="number" />
                <Field name="waterSalesRev" component="input" type="number" />
                <Field name="feesChargesRev" component="input" type="number" />
                <Field name="subsidiesRev" component="input" type="number" />
                <Field name="reserveFundTotal" component="input" type="number" />
                <Field name="reserveFundContribution" component="input" type="number" />
                <Field name="personnelCosts" component="input" type="number" />
                <Field name="operationCosts" component="input" type="number" />
                <Field name="debtFinancing" component="input" type="number" />
              </div>
            </div>
            <div className="ui grid">
              <SignUpBackButton to="/signup/step1"/>
              <div id="revenue-costs-submit-button" className="column eight wide">
                <button type='submit' className="ui button">Continue To Sources &gt;</button>
              </div>
            </div>
          </form>
        </div>
      )} />
    );
  }
}

RevenueCostsForm = reduxForm({
  form: 'revenueCosts'
})(RevenueCostsForm);

export default connect (mapStateToProps, mapDispatchToProps)(RevenueCostsForm);
