import React from 'react';
import { Link } from 'react-router-dom';

const RightNavHome = () => (
  <div className="ui buttons">
    <Link to="/login"><button className="ui button">Log In</button></Link>
    <button className="ui button">Sign Up</button>
  </div>
);

export default RightNavHome;
