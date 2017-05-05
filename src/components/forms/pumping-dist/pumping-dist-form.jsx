import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import { Field, reduxForm } from 'redux-form';
import { submitPumpInfo } from '../../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignUpBackButton from '../sign-up-back-button';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import styles from '../forms.css';



const mapStateToProps = (state, ownProps) => {
  return {
    distributionformData: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({
    submitPumpInfo }, dispatch);
};


export class PumpingDistForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Route render = {({ history }) => (
        <div id="pumping-dist-form" className="form-step">
          <SignUpStep step="6" />
          <div className="ui grid">
            <div className="column sixteen wide">
              <h3>Please Enter Information About Your Distribution System</h3>
            </div>
          </div>

          <form id="step6" onSubmit = {(event) => {
            event.preventDefault();
            let x = this.props.distributionformData.pumpingDist.values;
            this.props.submitPumpInfo(
              x.total_length_miles,
              x.average_age_of_pipes, x.average_main_diameter_inches,
              x.condition,
              () => {
                history.push('/dashboard');
              });
          }}>
            <div className="ui grid">
              <div className="column seven wide">
                <label>Estimated Length Of Distribution System (miles):</label>
                <label>Average Age Of Pipes (years):</label>
                <label>Average Main Diameter (inches):</label>
                <label>Condition:</label>
              </div>

              <div className="column nine wide">
                <Field name="total_length_miles" component="input" type="number" required />
                <Field name="average_age_of_pipes" component="input" type="number" required />
                <Field name="average_main_diameter_inches" component="select" className="ui dropdown" required>
                  <option value="select">select:</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="12">12</option>
                  <option value="24">24</option>
                </Field>
                <Field name="condition" component="select" className="ui dropdown">
                  <option value="select">select:</option>
                  <option value="great">Great</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
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
