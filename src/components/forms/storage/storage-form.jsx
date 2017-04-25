import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import SignUpBackButton from '../sign-up-back-button';
import { Field, reduxForm } from 'redux-form';

class StorageForm extends Component {
  render() {
    return (
      <div className="storage-form" className="form-step">
        <SignUpStep step="5" />
        <div className="ui grid">
          <div className="column sixteen wide">
            <h3>Storage #1</h3>
          </div>
        </div>

        <form id="step5">
          <div className="ui grid">
            <div className="column seven wide">
              <label>Name Of Reservoir:</label>
              <label>Type:</label>
              <label>Year Of Construction:</label>
              <label>Storage Capacity (Gallons):</label>
              <label>Condition</label>
            </div>

            <div className="column nine wide">
              <Field name="ReservoirName" component="input" type="text" />
              <Field name="StorageType" component="select" className="ui dropdown">
                <option value="Concrete">Concrete</option>
                <option value="Steel">Steel</option>
                <option value="Redwood">Redwood</option>
                <option value="Plastic">Plastic</option>
              </Field>
              <Field name="YearOfConstruction" component="input" type="number" />
              <Field name="StorageCapacity" component="input" type="number" />
              <Field name="StorageCondition" component="select" className="ui dropdown">
                <option value="Great">Great</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </Field>
            </div>
          </div>
          <div className="ui grid">
            <SignUpBackButton />
            <div id="revenue-costs-submit-button" className="column eight wide">
              <button className="ui button">Add More Storage &gt;</button>
            </div>
          </div>
          
          <div className="ui grid">
            <div className="column eight wide"></div>
            <div id="revenue-costs-submit-button" className="column eight wide">
              <button className="ui button">Continue To Pumping &gt;</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

StorageForm = reduxForm({
  form: 'storage'
})(StorageForm);

export default StorageForm;
