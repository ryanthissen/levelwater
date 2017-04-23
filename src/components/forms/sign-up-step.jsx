import React from 'react';

const SignUpStep = (props) => (
  <div id="sign-up-step">
    <div className="ui grid">
      <div className="column thirteen wide"></div>
      <div className="column three wide">
        Step {props.step} of 6
      </div>
    </div>
  </div>
);

export default SignUpStep;
