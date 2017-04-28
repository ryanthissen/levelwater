import React from 'react';
import styles from './manage.css';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    basicInfo: state.basicInfo,
    revenueAndCosts: state.revenueAndCosts,
    source1: state.source1,
    addNewSource: state.addNewSource,
    treatmentPlant1: state.treatmentPlant1,
    addNewTreatment: state.addNewTreatment,
    storage1: state.storage1,
    addNewStorage: state.addNewStorage,
    pumpingAndDistribution: state.pumpingAndDistribution
  };
};


const ManageDropdown = (props) => (
  <div className="manage-dropdown">
    <div className="ui grid">
      <div className="column one wide">
        <img src={require('../../img/triangle.png')} />
      </div>
      <div className="column thirteen wide" menu={props.menu}>{props.text}</div>
    </div>
  </div>
);

export default ManageDropdown;
