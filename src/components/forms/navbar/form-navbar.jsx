import React from 'react';
import { Link } from 'react-router-dom';
import RightNavForms from './right-nav-forms';
import styles from './form-navbar.css'


export const FormNavbar = () => (
  <div id="navbar">
    <div className="ui grid">
      <div className="three wide column" id="demo-button"></div>
      <div className="nine wide computer  column" id="header">
        <Link to="/"><h1>levelwater.io</h1></Link>
      </div>
      <div className="four wide column" id="right-nav-forms"><RightNavForms />
      </div>
    </div>
  </div>
);

export default FormNavbar;
