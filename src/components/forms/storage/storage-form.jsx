import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import SignUpBackButton from '../sign-up-back-button';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { submitStorageInfo } from '../../../actions'
import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import styles from '../forms.css';
import styles2 from './storage-form.css';




const mapStateToProps = (state, ownProps) => {
  return {
    storageFormData: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ submitStorageInfo }, dispatch)
};

class StorageForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Route render = {({ history }) => (
        <div className="storage-form" className="form-step">
          <SignUpStep step="5" />
          <div className="ui grid">
            <div className="column sixteen wide">
              <h3>Storage #1</h3>
            </div>
          </div>

          <form id="step5" onSubmit = {(event) => {
            event.preventDefault();
            let x = this.props.storageFormData.storage.values;
            console.log(x);
            this.props.submitStorageInfo(
              x.reservoir_type,
              x.reservoir_name,
              x.year_constructed,
              x.capacity,
              x.condition,
              x.critical_to_operations,
              () => {
                history.push('./signup/step6');
              });
          }}>
            <div className="ui grid">
              <div className="column seven wide">
                <label>Name Of Reservoir:</label>
                <label>Type:</label>
                <label>Year Of Construction:</label>
                <label>Storage Capacity (Gallons):</label>
                <label>Condition</label>
                <label>Is This Facility Critical To Operations:</label>
              </div>

              <div className="column nine wide">
                <Field name="reservoir_name" component="input" type="text" required />
                <Field name="reservoir_type" component="select" className="ui dropdown">
                  <option value="select">select:</option>
                  <option value="concrete">Concrete</option>
                  <option value="steel">Steel</option>
                  <option value="redwood">Redwood</option>
                  <option value="plastic">Plastic</option>
                </Field>
                <Field name="year_constructed" component="input" type="number" required />
                <Field name="capacity" component="input" type="number" required />
                <Field name="condition" component="select" className="ui dropdown">
                  <option value="select">select:</option>
                  <option value="great">Great</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </Field>
                <Field name="critical_to_operations" component="select" className="ui dropdown">
                  <option value="default">select</option>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </Field>
              </div>
            </div>
            <div className="ui grid">

              <div id="revenue-costs-submit-button" className="column sixteen wide">
                <button className="ui button">+ Add More Storage</button>
              </div>
            </div>

            <div className="ui grid">
              <SignUpBackButton to="/signup/step4"/>
              <div id="revenue-costs-submit-button" className="column eight wide">
                <button className="ui button">Continue To Pumping &gt;</button>
              </div>
            </div>
          </form>
        </div>
      )} />
    );
  }
}

StorageForm = reduxForm({
  form: 'storage'
})(StorageForm);

export default connect (mapStateToProps, mapDispatchToProps)(StorageForm);
