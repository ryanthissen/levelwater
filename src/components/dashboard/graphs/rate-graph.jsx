import React, { Component } from 'react';
import C3Chart from 'react-c3js';

const info = {
  ratesFinancesObject: {
    id: 1,
    water_systems_id: 1,
    current_average_water_rate: 40,
    total_financial_reserves: 10000,
    annual_revenue_water_sales: 50000,
    annual_revenue_fees_charged: 50000,
    annual_revenue_subsidies: 1000,
    annual_savings_to_financial_reserves: 1000,
    annual_personnel_costs: 40000,
    annual_operations_costs: 30000,
    annual_debt_costs: 4000
  },
 criticalInfrastructure:
  [ [ 'First Street Well', 500000, 32, 15625 ],
    [ 'Main Street Tank', 800000, 5, 160000 ],
    [ 'First Street Tank', 1050000, 11, 95455 ],
    [ 'Distribution System', 1980000, 40, 1238 ] ],
 noncriticalInfrastructure:
  [ [ 'Main Street Well', 435000, 5, 87000 ],
    [ 'First Street Treatment Plant', 220000, 9, 24444 ] ]
}

let increase = info.ratesFinancesObject.annual_savings_to_financial_reserves;
let years = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
let linesArray = [];

//loops to add increases to each year
// critical infrastructure
info.criticalInfrastructure.forEach((ele) => {
  for (let i = 0; i < ele[2]; i++) {
    years[i] += ele[3];
  }
});
//noncriticla infrastucture
info.noncriticalInfrastructure.forEach((ele) => {
  for (let i = 0; i < ele[2]; i++) {
    years[i] += ele[3];
  }
});






const data = {
        x: 'x',
        columns: [
            ['x', '2017-07-24', '2018-07-25', '2019-07-26', '2020-07-27', '2021-07-28', '2022-07-29', '2023-07-29', '2024-07-29', '2025-07-29', '2026-07-29', '2027-07-24', '2028-07-25', '2029-07-26', '2030-07-27', '2031-07-28', '2032-07-29', '2033-07-29', '2034-07-29', '2035-07-29', '2036-07-29', '2037-07-24', '2038-07-25', '2039-07-26', '2040-30-27', '2041-07-28', '2042-07-29', '2043-07-29', '2044-07-29', '2045-07-29', '2046-07-29', '2047-07-29', '2048-07-29', '2049-07-29', '2050-07-29', '2051-07-29', '2052-07-29', '2053-07-29', '2054-07-29', '2055-07-29', '2056-07-29'],
            ['annual contribution to reserve', increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase, increase],
            ['current rate', years[0], years[1], years[2], years[3], years[4], years[5], years[6], years[7], years[8], years[9],years[10], years[11], years[12], years[13], years[14],years[15], years[16], years[17], years[18], years[19],years[20], years[21], years[22], years[23], years[24],years[25], years[26], years[27], years[28], years[29],years[30], years[31], years[32], years[33], years[34],years[35], years[36], years[37], years[38], years[39]]

        ],

        type: 'line',

    }

    //loops to add increases to each year
    // critical infrastructure
    info.criticalInfrastructure.forEach((ele) => {
      linesArray.push({value: data.columns[0][`${ele[2]}`], text: `Replace ${ele[0]}`});
      for (let i = 0; i < ele[2]; i++) {
        years[i] += ele[3];
      }
    });
    //noncriticla infrastucture
    info.noncriticalInfrastructure.forEach((ele) => {
      linesArray.push({value: data.columns[0][`${ele[2]}`], text: `Replace ${ele[0]}`});
      for (let i = 0; i < ele[2]; i++) {
        years[i] += ele[3];
      }
    });





    console.log(years);
    console.log(linesArray);

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

const grid = {
            x: {
                lines: linesArray
            }
        }

const size =  {
        height: 320,
        width: 880
    };











export default class RateGraph extends Component {

  render() {
    return (
    <div className="c3">
      <C3Chart data={data} axis={axis} grid={grid} size={size} />

    </div>
    );

  }
}
