import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import { Field, reduxForm } from 'redux-form';
import { submitRevenueCostInfo } from '../../../actions'
import { connect } from 'react-redux';
import SignUpBackButton from '../sign-up-back-button';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import styles from '../forms.css';

const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.pumpingDistForm
  };
};

const mapDispatchToProps = (dispatch) => {
};


class PumpingDistForm extends Component {
  render() {
    return (
      <Route render = {({ history }) => (
        <div id="pumping-dist-form" className="form-step">
          <SignUpStep step="6" />
          <div className="ui grid">
            <div className="column sixteen wide">
              <h3>Pumping And Distribution</h3>
            </div>
          </div>

          <form id="step6" onSubmit = {(event) => {
            event.preventDefault();
            let x = this.props;
            history.push('/dashboard');
          }}>
            <div className="ui grid">
              <div className="column seven wide">
                <label>Est. Length Of Distribution System(Miles):</label>
                <label>Est. Number Of Valves:</label>
                <label>Est. Number Of Meters:</label>
                <label>Number Of Pumping Plants:</label>
                <label>Combined Pumping Capacity:</label>
                <label>Condition:</label>
              </div>

              <div className="column nine wide">
                <Field name="DistLength" component="input" type="number" required />
                <Field name="NumberOfValves" component="input" type="number" required />
                <Field name="NumberOfMeters" component="input" type="number" required />
                <Field name="NumberOfPumpingPlants" component="input" type="number" required />
                <Field name="CombinedPumpCapacity" component="input" type="number" required />
                <Field name="PumpsCondition" component="select" className="ui dropdown" required>
                  <option value="Great">Great</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </Field>
              </div>
            </div>
            <div className="ui grid">
              <SignUpBackButton to="/signup/step5"/>
              <div id="revenue-costs-submit-button" className="column eight wide">
                <button type='submit' className="ui button">See My Dashboard &gt;</button>
              </div>
            </div>
          </form>
        </div>
      )} />
    );
  }
}

PumpingDistForm = reduxForm({
  form: 'pumpingDist'
})(PumpingDistForm);

export default connect (mapStateToProps, mapDispatchToProps)(PumpingDistForm);
