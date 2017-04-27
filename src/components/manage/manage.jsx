import React from 'react';
import ManageHeader from './manage-header';
import ManageDropdowns from './manage-dropdowns';
import ManageButton from './manage-button';
import styles from './manage.css';


const Manage = () => (
  <div id="manage">
    <ManageHeader />
    <ManageDropdowns />
    <ManageButton />
  </div>
);

export default Manage;
