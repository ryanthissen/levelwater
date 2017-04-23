import React from 'react';
import SignUpStep from '../sign-up-step';
import RevenueCostsSubmitButton from './revenue-costs-submit-button';
import SignUpBackButton from '../sign-up-back-button'

const RevenueCostsForm = () => (
  <div id="revenue-costs-form">
    <SignUpStep step="2" />
    <div className="ui grid">
      <div className="column sixteen wide">
        <h3>Please Enter Revenue, Cost, and Reserve Fund Information From Your Most Recent Year of Operations</h3>
      </div>
    </div>

    <form id="step2">
      <div className="ui grid">
        <div className="column seven wide">
          <label >Average Monthly Rate per Connection:</label>
          <label >Annual Revenue From Water Sales:</label>
          <label >Annual Revenue From Fees And Charges:</label>
          <label >Annual Revenue From Subsidies:</label>
          <label >Total Amount in Reserve Fund:</label>
          <label >Annual Reserve Fund Contribution:</label>
          <label >Annual Personnel Costs:</label>
          <label >Annual Operations Costs:</label>
          <label >Annual Debt Financing:</label>
        </div>

        <div className="column nine wide">
          <input />
          <input />
          <input />
          <input />
          <input />
          <input />
          <input />
          <input />
          <input />
        </div>
      </div>
      <div className="ui grid">
        <SignUpBackButton />
        <div id="revenue-costs-submit-button" className="column eight wide">
          <button className="ui button">Continue To Sources &gt;</button>
        </div>
      </div>
    </form>
  </div>
)


export default RevenueCostsForm;
