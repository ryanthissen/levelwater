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
  title: 'Annual Revenue',
  label: {
      format: function(value, ratio, id) {
        return `$${value}`;
      }
    },
};


export class AnnualRevenueGraph extends Component {

  constructor(props) {
    super(props);
    this.data = {
      columns: [
          ['Water Sales', this.props.dashState.annual_revenue_water_sales],
          ['Fees and Charges', this.props.dashState.annual_revenue_fees_charged],
          ['Subsidies', this.props.dashState.annual_revenue_subsidies],
      ],
      type : 'donut'
    };
  }

  render() {
    return (
    <div className="c3 column eight wide" id="c3-visuals">
      <C3Chart data={this.data} donut={donut} />
    </div>
    );
  }
}

export default connect(mapStateToProps)(AnnualRevenueGraph);
