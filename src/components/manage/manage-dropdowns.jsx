import React from 'react';
import ManageDropdown from './manage-dropdown';
import styles from './manage.css';

const ManageDropdowns = () => (
  <div id="manage-dropdowns">
    <ManageDropdown text="Basic Info" />
    <ManageDropdown text="Revenue And Costs" />
    <ManageDropdown text="Source #1" />
    <ManageDropdown text="Add New Source" />
    <ManageDropdown text="Treatment Plant #1" />
    <ManageDropdown text="Add New Treatment" />
    <ManageDropdown text="Storage #1" />
    <ManageDropdown text="Add New Storage" />
    <ManageDropdown text="Pumping And Distribution" />
  </div>
);

export default ManageDropdowns;
