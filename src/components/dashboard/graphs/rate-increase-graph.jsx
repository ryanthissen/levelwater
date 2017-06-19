import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    ratesFinancesObject : state.dashButtons.ratesFinancesObject,
    criticalInfrastructure : state.dashButtons.criticalInfrastructure,
    noncriticalInfrastructure : state.dashButtons.noncriticalInfrastructure,
    waterSystemResults: state.dashButtons.water_system_results
  };
};



const donut = {
  title: 'Target Rate Increase',
  label: {
      format: function(value, ratio, id) {
        return `$${value}`;
      }
    },
  };


export class RateIncreaseGraph extends Component {

  constructor(props) {
    super(props);
    this.data = {
      columns: [
          ['Current Average Water Rate', this.props.ratesFinancesObject.current_average_water_rate]
          ],
      type : 'donut',
      tooltip: {
        show: false
      }
    };
    this.constructData();
  }

  constructData() {
    for (let i = 0; i < this.props.criticalInfrastructure.length; i++) {
      this.data.columns.push([this.props.criticalInfrastructure[i][0], (this.props.criticalInfrastructure[i][3]/(12 * this.props.waterSystemResults.connections)).toFixed(2)])
    }
  }

  render() {
    return (
    <div className="c3 column eight wide" id="c3-visuals">
      <C3Chart data={this.data} donut={donut} />
    </div>
    );
  }
}

export default connect(mapStateToProps)(RateIncreaseGraph);
