import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import { Field, reduxForm } from 'redux-form';
import { submitRevenueCostInfo } from '../../../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignUpBackButton from '../sign-up-back-button';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import styles from '../forms.css';



const mapStateToProps = (state, ownProps) => {
  return {
    costRevenueFormData: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ submitRevenueCostInfo }, dispatch);
};

class RevenueCostsForm extends Component {

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
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
            let x = this.props.costRevenueFormData.revenueCosts.values;
            console.log(x);
            this.props.submitRevenueCostInfo(
              x.current_average_water_rate,
              x.total_financial_reserves,
              x.annual_revenue_water_sales,
              x.annual_revenue_fees_charges,
              x.annual_revenue_subsidies,
              x.annual_savings_to_financial_reserve,
              x.annual_personnel_costs,
              x.annual_operational_costs,
              x.annual_debt_costs,
              () => {
                history.push('/signup/step3');
              });
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
                <Field name="current_average_water_rate" component="input" type="number" required />
                <Field name="annual_revenue_water_sales" component="input" type="number" required />
                <Field name="annual_revenue_fees_charges" component="input" type="number" required />
                <Field name="annual_revenue_subsidies" component="input" type="number" required />
                <Field name="total_financial_reserves" component="input" type="number" required />
                <Field name="annual_savings_to_financial_reserve" component="input" type="number" required />
                <Field name="annual_personnel_costs" component="input" type="number" required />
                <Field name="annual_operational_costs" component="input" type="number" required />
                <Field name="annual_debt_costs" component="input" type="number" required />
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
