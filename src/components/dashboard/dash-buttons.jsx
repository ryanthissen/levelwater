import React, { Component } from 'react';
import DashButtonsHeader from './dash-buttons-header';
import DashButton from './dash-button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { submitRatesCostsButton } from '../../actions';


const mapStateToProps = (state, ownProps) => {
  return {
    ratesCostsData: state.dashButtons
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ submitRatesCostsButton }, dispatch);
};

export class DashButtons extends Component {

  render() {
    return (
      <Route render={({ history }) => (
        <div id="dash-buttons">
          <DashButtonsHeader />
          <div className="ui grid">
            <div className="column eight wide test"><DashButton buttonText="Recommended Rate Schedule"/></div>
            <div className="column eight wide"><DashButton buttonText="Fixed Costs" onClick={(event) => {
              console.log('clicked!', this);
              event.preventDefault();
              this.props.submitRatesCostsButton(
                () => {
                  history.push('/dashboard/costs');
                }
              );
            }}/>
            </div>
            <div className="column eight wide"><DashButton buttonText="Projected Future Needs"/></div>
            <div className="column eight wide"><DashButton buttonText="Edit System Info"/></div>
          </div>
        </div>
      )} />

    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashButtons);
