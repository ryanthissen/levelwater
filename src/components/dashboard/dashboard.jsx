import React from 'react';
import DashHeader from './dash-header';
import C3Visuals from './c3-visuals';
import DashButtons from './dash-buttons';
import styles from './dashboard.css';

const Dashboard = () => (
  <div id="dashboard">
    <DashHeader />
    <C3Visuals />
    {/* <DashButtons /> */}
  </div>
);

export default Dashboard;
