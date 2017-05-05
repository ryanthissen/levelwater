import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    dashState: state.dashButtons.ratesFinancesObject
  };
};



const donut = {
  title: 'Fixed Costs',
};


class FixedCostsGraph extends Component {

  constructor(props) {
    super(props);
    this.data = {
      columns: [
          ['Personnel Costs', this.props.dashState.annual_personnel_costs],
          ['Operational Costs', this.props.dashState.annual_personnel_costs],
          ['Debt Costs', this.props.dashState.annual_debt_costs],
      ],
      type : 'donut'
    };
  }

  render() {
    return (
    <div className="c3" id="c3-visuals">
      <C3Chart data={this.data} donut={donut} />
    </div>
    );
  }
}

export default connect(mapStateToProps)(FixedCostsGraph);
