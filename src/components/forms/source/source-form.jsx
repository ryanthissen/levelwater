import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import SignUpBackButton from '../sign-up-back-button';
import { Field, reduxForm } from 'redux-form';
import { submitSourceInfo } from '../../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import styles from '../forms.css';
import styles2 from './source-form.css';



const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.sourceForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ submitSourceInfo }, dispatch);
};

class SourceForm extends Component {

  render() {
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
            let x = this.props;
            history.push('/signup/step4');

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
              </div>

              <div className="column nine wide">
                <Field name="SourceName" component="input" type="text" />
                <Field name="SourceType" component="select" className="ui dropdown">
                  <option value="Groundwater">Groundwater</option>
                  <option value="SurfaceWater">Surface Water</option>
                </Field>
                <Field name="SourceReceivesTreatment" component="select" className="ui dropdown">
                  <option value="NoSourceDoesNotReceiveTreatment">No</option>
                  <option value="YesSourceDoesReceiveTreatment">Yes</option>
                </Field>
                <Field name="YearOfConstruction" component="input" type="number" />
                <Field name="SourceCapacity" component="input" type="number" />
                <Field name="SourceCondition" component="select" className="ui dropdown">
                  <option value="Great">Great</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </Field>
                <Field name="SourceCritical" component="select" className="ui dropdown">
                  <option value="NoSourceIsNotCritical">No</option>
                  <option value="YesSourceIsCritical">Yes</option>
                </Field>
              </div>
            </div>

            <div className="ui grid">

              <SignUpBackButton to="/signup/step2"/>
              <div id="revenue-costs-submit-button" className="column eight wide">
                <button className="ui button">Add Another Source &gt;</button>

              </div>
            </div>

            <div className="ui grid">

              <div className="column eight wide"></div>

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

