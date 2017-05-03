import React from 'react';

const DashButton = (props) => (
  <div id="dash-button">
    <button className="ui button" onClick={props.onClick}>{ props.buttonText }</button>
  </div>
);

export default DashButton;
