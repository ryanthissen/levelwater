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

export class StorageForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Route render={({ history }) => (
        <div className="storage-form" className="form-step">
          <SignUpStep step="5" />
          <div className="ui grid">
            <div className="column sixteen wide">
              <h3>Please Enter Information About Your Finished Water Reservoir</h3>
            </div>
          </div>

          <form id="step5" onSubmit={(event) => {
            event.preventDefault();
            let x = this.props.storageFormData.storage.values;
            this.props.submitStorageInfo(
              x.reservoir_type,
              x.reservoir_name,
              x.year_constructed,
              x.capacity,
              x.condition,
              x.critical_to_operations,
              () => {
                history.push('/signup/step6');
              });
          }}>
            <div className="ui grid">
              <div className="column seven wide">
                <label>Name Of Reservoir:</label>

              </div>

              <div className="column nine wide computer sixteen wide tablet"><Field name="reservoir_name" component="input" type="text" required /></div>

              <div className="column seven wide computer sixteen wide tablet"><label>Type:</label></div>

              <div className="column nine wide computer sixteen wide tablet"><Field name="reservoir_type" component="select" className="ui dropdown">
                <option value="select">select:</option>
                <option value="concrete">Concrete</option>
                <option value="steel">Steel</option>
                <option value="redwood">Redwood</option>
                <option value="plastic">Plastic</option>
              </Field></div>


              <div className="column seven wide computer sixteen wide tablet"><label>Year Of Construction:</label></div>

              <div className="column nine wide computer sixteen wide tablet"><Field name="year_constructed" component="input" type="number" required /></div>


              <div className="column seven wide computer sixteen wide tablet"><label>Storage Capacity (gallons):</label></div>

              <div className="column nine wide computer sixteen wide tablet"><Field name="capacity" component="input" type="number" required /></div>

              <div className="column seven wide computer sixteen wide tablet"><label>Condition</label></div>

              <div className="column nine wide computer sixteen wide tablet"><Field name="condition" component="select" className="ui dropdown">
                <option value="select">select:</option>
                <option value="great">Great</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </Field></div>


              <div className="column seven wide computer sixteen wide tablet"><label>Is This Reservoir Critical To Serve Safe Water?</label></div>











              <div className="column nine wide">
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
                <button className="ui button">Continue To Distro. &gt;</button>
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
