import React from 'react';
import { Link } from 'react-router-dom';

const RightNavHome = () => (
  <div className="ui buttons">
    <Link to="/login"><button className="ui button">Log In</button></Link>
    <Link to="/signup"><button className="ui button">Sign Up</button></Link>
  </div>
);

export default RightNavHome;
