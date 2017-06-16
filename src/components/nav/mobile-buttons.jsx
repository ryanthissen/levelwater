import React from 'react';
import { Link } from 'react-router-dom';
import DemoButton from './demo-button';
import RightNavHome from './right-nav-home';

const MobileButtons = () => (
  <div id="mobile-buttons">
    <div id="mobile-right-nav-home"><RightNavHome /></div>
    <div id="mobile-demo-button"><DemoButton /></div>
  </div>
);

export default MobileButtons;
