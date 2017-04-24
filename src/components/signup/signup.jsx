import React from 'react';
import OAuthButton from '../login/oauth-button';
import SignupForm from './signup-form';

const Signup = () => (
  <div id="signup">
    <SignupForm />
    <OAuthButton />
  </div>
);

export default Signup;
