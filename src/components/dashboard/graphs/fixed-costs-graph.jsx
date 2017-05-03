import React, { Component } from 'react';
import C3Chart from 'react-c3js';

const data = {
  columns: [
      ['Personnel Costs', 50000],
      ['Operational Costs', 13950],
      ['Debt Costs', 20000],
  ],
  type : 'donut'
};

const donut = {
  title: 'Fixed Costs',
}


export default class FixedCostsGraph extends Component {

  render() {
    return (
    <div className="c3">
      <C3Chart data={data} donut={donut} />

    </div>
    );

  }
}
