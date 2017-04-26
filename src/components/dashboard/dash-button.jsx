import React from 'react';

const DashButton = (props) => (
  <div id="dash-button">
    <button className="ui button">{ props.buttonText }</button>
  </div>
);

export default DashButton;
