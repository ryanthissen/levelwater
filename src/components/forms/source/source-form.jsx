import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import SignUpBackButton from '../sign-up-back-button';
import { Field, reduxForm } from 'redux-form';
import { submitSourceInfo } from '../../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import styles from '../forms.css';
import styles2 from './source-form.css';



const mapStateToProps = (state, ownProps) => {
  return {
    sourceFormData: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ submitSourceInfo }, dispatch);
};

class SourceForm extends Component {

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Route render = {({ history }) => (
        <div id="source-form" className="form-step">
          <SignUpStep step="3" />
          <div className="ui grid">
            <div className="column sixteen wide">
              <h3>Source #1</h3>
            </div>
          </div>

          <form id="step3" onSubmit = {(event) => {
            event.preventDefault();
            let x = this.props.sourceFormData.source.values;
            console.log(x);
            this.props.submitSourceInfo(
              //1 needs to be replaced with user's water system id
              1,
              x.source_name,
              x.source_type,
              x.treatment,
              x.critical_to_operations,
              x.year_constructed,
              x.capacity,
              x.condition,
              x.continuous_chlorination,
              () => {
                history.push('/signup/step4');
              });
          }}>
            <div className="ui grid">
              <div className="column seven wide">
                <label>Name Of Source:</label>
                <label>Source Type:</label>
                <label>Does This Source Receive Treatment To Meet An MCL:</label>
                <label>Year Of Construction:</label>
                <label>Maximum Available Capacity:</label>
                <label>What Is The Source's Condition:</label>
                <label>Is This Source Critical To Being Able To Provide Safe Water:</label>
                <label>Does This Source Recieve Continuous Chlorination?</label>
              </div>

              <div className="column nine wide">
                <Field name="source_name" component="input" type="text" required />
                <Field name="source_type" component="select" className="ui dropdown">
                  <option value="Groundwater">Groundwater</option>
                  <option value="SurfaceWater">Surface Water</option>
                </Field>
                <Field name="treatment" component="select" className="ui dropdown">
                  <option value="NoSourceDoesNotReceiveTreatment">No</option>
                  <option value="YesSourceDoesReceiveTreatment">Yes</option>
                </Field>
                <Field name="year_constructed" component="input" type="number" required />
                <Field name="capacity" component="input" type="number" required />
                <Field name="condition" component="select" className="ui dropdown">
                  <option value="Great">Great</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </Field>
                <Field name="critical_to_operations" component="select" className="ui dropdown">
                  <option value="NoSourceIsNotCritical">No</option>
                  <option value="YesSourceIsCritical">Yes</option>
                </Field>
                <Field name="continous_chlorination" component="select" className="ui dropdown">
                  <option value="NoContinuousChlorination">No</option>
                  <option value="YesContinuousChlorination">Yes</option>
                </Field>
              </div>
            </div>
            <div className="ui grid">


              <div id="revenue-costs-submit-button" className="column sixteen wide">
                <button className="ui button">+ Add Another Source</button>

              </div>
            </div>

            <div className="ui grid">

                <SignUpBackButton to="/signup/step2"/>

              <div id="revenue-costs-submit-button" className="column eight wide">
                <button className="ui button">Continue To Treatment &gt;</button>
              </div>
            </div>
          </form>
        </div>
      )} />

    );
  }
}

SourceForm = reduxForm({
  form: 'source'
})(SourceForm);

export default connect(mapStateToProps, mapDispatchToProps)(SourceForm);
