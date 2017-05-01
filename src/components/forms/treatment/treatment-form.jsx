import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import SignUpBackButton from '../sign-up-back-button';
import { Field, reduxForm } from 'redux-form';
import { submitTreatmentInfo } from '../../../actions'
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import styles from '../forms.css';
import styles2 from './treatment-form.css';



const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.treatmentForm
  };
};

const mapDispatchToProps = (dispatch) => {
};

class TreatmentForm extends Component {
  render() {
    return (
      <Route render = {({ history }) => (
        <div id="treatment-form" className="form-step">
          <SignUpStep step="4" />
          <div className="ui grid">
            <div className="column sixteen wide">
              <h3>Treatment Plant #1</h3>
            </div>
          </div>

          <form id="step4" onSubmit = {(event) => {
            event.preventDefault();
            let x = this.props;
            history.push('/signup/step5');
          }}>
            <div className="ui grid">
              <div className="column seven wide">
                <label>Name Of Treatment Plant:</label>
                <label>Type:</label>
                <label>Year Of Construction:</label>
                <label>Capacity:</label>
                <label>Condition:</label>
                <label>Is This Plant Critical To Your Continued Operations?</label>
              </div>

              <div className="column nine wide">
                <Field name="treatment_name" component="input" type="text" required />
                <Field name="treatment_type" component="select" className="ui dropdown">
                  <option value="Conventional Surface Water">Conventional Surface Water</option>
                  <option value="Alternative Surface Water">Alternative Surface Water</option>
                  <option value="Oxidation/Filtration">Oxidation/Filtration</option>
                  <option value="Coagulation/Filtration">Coagulation/Filtration</option>
                  <option value="Granular Activated Carbon">Granular Activated Carbon</option>
                  <option value="Corrosion Control">Corrosion Control</option>
                </Field>
                <Field name="year_constructed" component="input" type="number" required />
                <Field name="capacity" component="input" type="number" required />
                <Field name="condition" component="select" className="ui dropdown">
                  <option value="Great">Great</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </Field>
                <Field name="critical_to_operations" component="select" className="ui dropdown">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
              </div>
            </div>
            <div className="ui grid">

              <div id="revenue-costs-submit-button" className="column sixteen wide">
                <button className="ui button">+ Add Another Plant</button>
              </div>

            </div>

            <div className="ui grid">
              <SignUpBackButton to="/signup/step3"/>
              <div id="revenue-costs-submit-button" className="column eight wide">
                <button className="ui button">Continue To Storage &gt;</button>
              </div>
            </div>
          </form>
        </div>
      )} />

    );
  }
}

TreatmentForm = reduxForm({
  form: 'treatment'
})(TreatmentForm);

export default TreatmentForm;
