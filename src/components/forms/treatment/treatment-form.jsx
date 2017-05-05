import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import SignUpBackButton from '../sign-up-back-button';
import { Field, reduxForm } from 'redux-form';
import { submitTreatmentInfo } from '../../../actions';
import { bindActionCreators } from 'redux';
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
    treatmentFormData: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ submitTreatmentInfo }, dispatch);
};

export class TreatmentForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Route render = {({ history }) => (
        <div id="treatment-form" className="form-step">
          <SignUpStep step="4" />
          <div className="ui grid">
            <div className="column sixteen wide">
              <h3>Please Enter Information About Your Treatment Plant</h3>
            </div>
          </div>

          <form id="step4" onSubmit = {(event) => {
            event.preventDefault();
            let x = this.props.treatmentFormData.treatment.values;
            console.log(x);
            this.props.submitTreatmentInfo(
              x.treatment_name,
              x.treatment_type,
              x.critical_to_operations,
              x.year_constructed,
              x.capacity,
              x.condition,
              () => {
                history.push('/signup/step5');
              });
          }}>
            <div className="ui grid">
              <div className="column seven wide computer sixteen wide tablet">
                <label>Name Of Treatment Plant:</label>
              </div>

              <div className="column nine wide computer sixteen wide tablet"><Field name="treatment_type" component="select" className="ui dropdown">
                <option value="select">select:</option>
                <option value="conventional-sw">Conventional Surface Water</option>
                <option value="ion-exchange">Ion Exchange</option>
                <option value="corrosion-control">Corrosion Control</option>
              </Field></div>

              <div className="column seven wide computer sixteen wide tablet"><label>Type of Treatment:</label></div>

              <div className="column nine wide computer sixteen wide tablet"><Field name="year_constructed" component="input" type="number" required /></div>

              <div className="column seven wide computer sixteen wide tablet"><label>Year Of Construction:</label></div>

              <div className="column nine wide computer sixteen wide tablet">
              <Field name="capacity" component="input" type="number" required /></div>

              <div className="column seven wide computer sixteen wide tablet"><label>Treatment Capacity (gpm):</label></div>

              <div className="column nine wide computer sixteen wide tablet"><Field name="condition" component="select" className="ui dropdown">
                <option value="select">select:</option>
                <option value="great">Great</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </Field></div>

              <div className="column seven wide computer sixteen wide tablet"><label>Condition of Treatment Plant:</label></div>

              <div className="column nine wide computer sixteen wide tablet"><Field name="critical_to_operations" component="select" className="ui dropdown">
                <option value="select">select:</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Field></div>

              <div className="column seven wide computer sixteen wide tablet"><label>Is This Plant Critical To Serve Safe Water?</label></div>











              <div className="column nine wide computer sixteen wide tablet">
              <Field name="treatment_name" component="input" type="text" required />






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

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentForm);
