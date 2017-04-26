import React from 'react';
import DashButtonsHeader from './dash-buttons-header';
import DashButton from './dash-button';

const DashButtons = () => (
  <div id="dash-buttons">
    <DashButtonsHeader />
    <div className="ui grid">
      <div className="column eight wide"><DashButton buttonText="Recommended Rate Schedule"/></div>
      <div className="column eight wide"><DashButton buttonText="Fixed Costs"/></div>
      <div className="column eight wide"><DashButton buttonText="Projected Future Needs"/></div>
      <div className="column eight wide"><DashButton buttonText="Edit System Info"/></div>      
    </div>
  </div>
);

export default DashButtons;
