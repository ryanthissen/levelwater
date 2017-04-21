import React from 'react';
import DemoButton from './demo-button';

const NavbarHome = () => (
  <div className="ui grid" id="navbar">
    <div className="two wide column" id="demo-btn"><DemoButton /></div>
    <div className="ten wide column" id="header">levelwater.io</div>
    <div className="four wide column" id="nav-home"></div>
  </div>
);

export default NavbarHome;
