import React from 'react';

export const SignUpStep = (props) => (
  <div id="sign-up-step" className="ui grid">
    <div className="column thirteen wide computer one wide tablet"></div>
    <div className="column three wide computer five wide tablet">
      Step {props.step} of 6
    </div>
  </div>
);

export default SignUpStep;
