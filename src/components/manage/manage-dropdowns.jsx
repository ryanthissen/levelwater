import React from 'react';
import ManageDropdown from './manage-dropdown';
import styles from './manage.css';

const ManageDropdowns = () => (
  <div id="manage-dropdowns">
    <ManageDropdown menu="basicInfo" text="Basic Info" />
    <ManageDropdown menu="revenueAndCosts" text="Revenue And Costs" />
    <ManageDropdown menu="source1" text="Source #1" />
    <ManageDropdown menu="addNewSource" text="Add New Source" />
    <ManageDropdown menu="treatmentPlant1" text="Treatment Plant #1" />
    <ManageDropdown menu="addNewTreatment" text="Add New Treatment" />
    <ManageDropdown menu="storage1" text="Storage #1" />
    <ManageDropdown menu="addNewStorage" text="Add New Storage" />
    <ManageDropdown menu="pumpingAndDistribution" text="Pumping And Distribution" />
  </div>
);

export default ManageDropdowns;
