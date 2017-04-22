import React from 'react';
import DemoButton from './demo-button';
import RightNavHome from './right-nav-home';

const NavbarHome = () => (
  <div id="navbar">
    <div className="ui grid">
      <div className="three wide column" id="demo-button"><DemoButton /></div>
      <div className="nine wide column" id="header"><h1>levelwater.io</h1></div>
      <div className="four wide column" id="right-nav-home"><RightNavHome />
      </div>
    </div>
  </div>
);

export default NavbarHome;
