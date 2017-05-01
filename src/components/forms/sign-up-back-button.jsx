import React from 'react';
import { Link } from 'react-router-dom';

const SignUpBackButton = (props) => (
  <div id="sign-up-back-button" className="column eight wide">
        <Link to={props.to}><button className="ui button">&lt; Go Back</button></Link>
  </div>
);

export default SignUpBackButton;
