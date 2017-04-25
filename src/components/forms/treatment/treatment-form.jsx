import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import SignUpBackButton from '../sign-up-back-button';
import { Field, reduxForm } from 'redux-form';

class TreatmentForm extends Component {
  render() {
    return (
      <div id="treatment-form">
        <SignUpStep step="4" />
        <div className="ui grid">
          <div className="column sixteen wide">
            <h3>Treatment Plant #1</h3>
          </div>
        </div>

        <form id="step4">
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
              <Field name="TreatmentPlantName" component="input" type="text" />
              <Field name="TreatmentType" component="select" className="ui dropdown">
                <option value="Conventional Surface Water">Conventional Surface Water</option>
                <option value="Alternative Surface Water">Alternative Surface Water</option>
                <option value="Oxidation/Filtration">Oxidation/Filtration</option>
                <option value="Coagulation/Filtration">Coagulation/Filtration</option>
                <option value="Granular Activated Carbon">Granular Activated Carbon</option>
                <option value="Corrosion Control">Corrosion Control</option>
              </Field>
              <Field name="YearOfConstruction" component="input" type="number" />
              <Field name="TreatmentCapacity" component="input" type="number" />
              <Field name="TreatmentCondition" component="select" className="ui dropdown">
                <option value="Great">Great</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </Field>
              <Field name="TreatmentCritical" component="select" className="ui dropdown">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>
          <div className="ui grid">
            <SignUpBackButton />
            <div id="revenue-costs-submit-button" className="column eight wide">
              <button className="ui button">Add Another Plant &gt;</button>
            </div>

          </div>

          <div className="ui grid">
            <div className="column eight wide"></div>
            <div id="revenue-costs-submit-button" className="column eight wide">
              <button className="ui button">Continue To Storage &gt;</button>
            </div>
          </div>
        </form>


      </div>
    );
  }
}

TreatmentForm = reduxForm({
  form: 'treatment'
})(TreatmentForm);

export default TreatmentForm;
