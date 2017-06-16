import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadChart } from '../../../actions';
import DashAnalysis from '../dash-analysis';
import FixedCostsGraph from './fixed-costs-graph';

const mapStateToProps = (state, ownProps) =>  {
  return {
    ratesFinancesObject : state.dashButtons.ratesFinancesObject,
    criticalInfrastructure : state.dashButtons.criticalInfrastructure,
    noncriticalInfrastructure : state.dashButtons.noncriticalInfrastructure
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ loadChart }, dispatch);
};

const axis = {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        },
        y: {
          label: {
            text: 'Increase To Financial Reserves',
            position: 'outer-middle'
          }
        },

    };

const zoom = {
      enabled: true
    };

const size =  {
        height: 320,
        width: 660
    };

class RateGraph extends Component {

  componentDidMount() {
    this.props.loadChart();
  }

  getDataAndLines() {
    let ratesFinancesObject = this.props.ratesFinancesObject;
    let criticalInfrastructure = this.props.criticalInfrastructure;
    let noncriticalInfrastructure = this.props.noncriticalInfrastructure;


    // console.log('info', criticalInfrastructure)

    let increase = ratesFinancesObject.annual_savings_to_financial_reserves;
    let years = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
    let linesArray = [];



    //loops to add increases to each year
    // critical infrastructure
    criticalInfrastructure.forEach((ele) => {
      for (let i = 0; i < ele[2]; i++) {
        years[i] += ele[3];
      }
    });
    //noncriticla infrastucture
    noncriticalInfrastructure.forEach((ele) => {
      for (let i = 0; i < ele[2]; i++) {
        years[i] += ele[3];
      }
    });

    return {
      linesArray, data: {
              x: 'x',
              columns: [
                  ['x', '2017-07-24', '2018-07-25', '2019-07-26', '2020-07-27', '2021-07-28', '2022-07-29', '2023-07-29', '2024-07-29', '2025-07-29', '2026-07-29', '2027-07-24', '2028-07-25', '2029-07-26', '2030-07-27', '2031-07-28', '2032-07-29', '2033-07-29', '2034-07-29', '2035-07-29', '2036-07-29', '2037-07-24', '2038-07-25', '2039-07-26', '2040-30-27', '2041-07-28', '2042-07-29', '2043-07-29', '2044-07-29', '2045-07-29', '2046-07-29', '2047-07-29', '2048-07-29', '2049-07-29', '2050-07-29', '2051-07-29', '2052-07-29', '2053-07-29', '2054-07-29', '2055-07-29', '2056-07-29'],
                  ['annual contribution to reserve', increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase],
                  ['current rate', years[0], years[1], years[2], years[3], years[4], years[5], years[6], years[7], years[8], years[9],years[10], years[11], years[12], years[13], years[14],years[15], years[16], years[17], years[18], years[19],years[20], years[21], years[22], years[23], years[24],years[25], years[26], years[27], years[28], years[29],years[30], years[31], years[32], years[33], years[34],years[35], years[36], years[37], years[38], years[39]]
              ],
              type: 'line',
          }
    }

  }

  render() {
    if (!this.props.criticalInfrastructure) {
      return <p>loading . . .</p>
    }
    const { data,linesArray } = this.getDataAndLines();
    const grid = {
            x: {
                lines: linesArray
            }
        }
    return (
    <div className="c3" id="c3-visuals">
      <div className="ui grid">
        <FixedCostsGraph />
        <div id="charts" className="column eight wide">
          <C3Chart data={data} axis={axis} grid={grid} size={size} />
        </div>
        <DashAnalysis financialData={this.props.ratesFinancesObject} criticalInfrastructure={this.props.criticalInfrastructure} noncriticalInfrastructure={this.props.noncriticalInfrastructure} />
      </div>
    </div>
    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RateGraph);
