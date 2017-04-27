import React from 'react';
import styles from './manage.css';


const ManageDropdown = (props) => (
  <div className="manage-dropdown">
    <div className="ui grid">
      <div className="column one wide">
        <img src={require('../../img/triangle.png')} />
      </div>
      <div className="column thirteen wide">{props.text}</div>
    </div>
  </div>
);

export default ManageDropdown;
