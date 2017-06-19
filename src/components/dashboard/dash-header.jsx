import React, { Component } from 'react';
import { connect } from 'react-redux';

// const DashHeader = ({name}) => (
//   <div id="dash-header">
//       <h2>{`My Dashboard ${name}`}</h2>
//   </div>
// );
const mapStateToProps = (state) => {
  if(state.dashButtons.water_system_results){
    let name = state.dashButtons.water_system_results.pws_name;
    return {
      name
    };
  } else {
    return ''
  }
};

class DashHeader extends React.Component {
  render() {
    if (this.props.name) {
      return (
        <div id="dash-header">
          <h2>{`My Dashboard - ${this.props.name}`}</h2>
        </div>
      );
    } else {
      return (<div></div>)
    }
  }
}

export default connect(mapStateToProps)(DashHeader);
