import React, { Component } from 'react';

export default class DashAnalysis extends Component {

  doMath() {
    let budgetStatus = '';
    let totalRevenue = this.props.financialData.annual_revenue_water_sales + this.props.financialData.annual_revenue_fees_charged + this.props.financialData.annual_revenue_subsidies;
    let totalCosts = this.props.financialData.annual_personnel_costs + this.props.financialData.annual_operations_costs + this.props.financialData.annual_debt_costs;
    let revCostDiff = totalRevenue - totalCosts;
    if (revCostDiff >= 0) {
      budgetStatus = 'Annual Budget Surplus:';
      return { totalRevenue, totalCosts, revCostDiff, budgetStatus };
    } else {
      budgetStatus = 'Annual Budget Deficit:'
      revCostDiff = revCostDiff * -1;
      return { totalRevenue, totalCosts, revCostDiff, budgetStatus };
    }
  }

  renderCriticalInfrastructureName() {
    console.log('props', this.props)
    return this.props.criticalInfrastructure.map((element, i) => {
      return <li key={i}>{element[0]}</li>;
    });
  }

  renderCriticalInfrastructureUsefulLife() {
    return this.props.criticalInfrastructure.map((element, i) => {
      return <li key={i}>{element[2]}</li>;
    });
  }

  renderCriticalInfrastructureAnnualContribution() {
    return this.props.criticalInfrastructure.map((element, i) => {
      return <li key={i}>${element[3]}</li>;
    });
  }

  renderNoncriticalInfrastructureName() {
    return this.props.noncriticalInfrastructure.map((element, i) => {
      return <li key={i}>{element[0]}</li>;
    });
  }

  renderNoncriticalInfrastructureUsefulLife() {
    return this.props.noncriticalInfrastructure.map((element, i) => {
      return <li key={i}>{element[2]}</li>;
    });
  }

  renderNoncriticalInfrastructureAnnualContribution() {
    return this.props.noncriticalInfrastructure.map((element, i) => {
      return <li key={i}>${element[3]}</li>;
    });
  }

  rateIncreaseCriticalAnalysis() {
    console.log('props', this.props)
    let generatedJSX = [];
    let cumulativeTotalCritical = 0;
    for (let i = 0; i < this.props.criticalInfrastructure.length; i++) {
      let generatedItem = (
        <div className="item">
          <div className="asset-name">{this.props.criticalInfrastructure[i][0]}</div>
          <div className="data increase-due-to-asset">Monthly Rate Increase to Account for Replacement: ${(this.props.criticalInfrastructure[i][3]/(12 * this.props.waterSystemResults.connections)).toFixed(2)}</div>
          <br/>
        </div>
      )
      generatedJSX.push(generatedItem)

    }
    console.log(cumulativeTotalCritical)
    return generatedJSX;
  }

  rateIncreaseNoncriticalAnalysis() {
    console.log('props', this.props)
    let generatedJSX = [];
    for (let i = 0; i < this.props.noncriticalInfrastructure.length; i++) {
      let generatedItem = (
        <div className="item">
          <div className="asset-name">{this.props.noncriticalInfrastructure[i][0]}</div>
          <div className="data increase-due-to-asset">Monthly Rate Increase to Account for Replacement: ${(this.props.noncriticalInfrastructure[i][3]/(12 * this.props.waterSystemResults.connections)).toFixed(2)}</div>
          <br/>
        </div>
      )
      generatedJSX.push(generatedItem)
    }
    return generatedJSX;
  }

  revenueAndCostsGenerate() {
    let {totalRevenue, totalCosts, revCostDiff, budgetStatus } = this.doMath();
    let generatedJSX = [];
    let generatedItem = (
    <div className="item">
      <div>{budgetStatus}  ${revCostDiff}</div>
      {/* <div>Annual Contribution to Reserve Fund:  ${this.props.financialData.annual_savings_to_financial_reserves}</div> */}
    </div>
  )
  generatedJSX.push(generatedItem);
  return generatedJSX;
  }

  criticalInfrastructureGenerate() {
    let generatedJSX = [];
    for (let i = 0; i < this.props.criticalInfrastructure.length; i++) {
      let generatedItem = (
          <div className="item">
            <div className="asset-name">{this.props.criticalInfrastructure[i][0]}</div>
            <div className="data estimated-replacement-cost">Estimated Replacement Cost:       ${this.props.criticalInfrastructure[i][1]}</div>
            <div className="data estimated-useful-life">Estimated Remaining Useful Life: {this.props.criticalInfrastructure[i][2]} years</div>
            <div className="data reserve-fund-increase">Annual Increase to Reserve Fund for Eventual Replacement: ${this.props.criticalInfrastructure[i][3]}</div>
            <div className="data monthly-increase-per-connection">Monthly Increase per Connection:  ${(this.props.criticalInfrastructure[i][3]/(12 * this.props.waterSystemResults.connections)).toFixed(2)}</div>
            <br/>
          </div>)
      generatedJSX.push(generatedItem)
    }
    return generatedJSX;
  }

  noncriticalInfrastructureGenerate() {
    let generatedJSX = [];
    for (let i = 0; i < this.props.noncriticalInfrastructure.length; i++) {
      let generatedItem = (
          <div className="item">
            <div className="asset-name">{this.props.noncriticalInfrastructure[i][0]}</div>
            <div className="data estimated-replacement-cost">Estimated Replacement Cost:       ${this.props.noncriticalInfrastructure[i][1]}</div>
            <div className="data estimated-useful-life">Estimated Remaining Useful Life: {this.props.noncriticalInfrastructure[i][2]} years</div>
            <div className="data reserve-fund-increase">Annual Increase to Reserve Fund for Eventual Replacement: ${this.props.noncriticalInfrastructure[i][3]}</div>
            <div className="data monthly-increase-per-connection">Monthly Increase per Connection:  ${(this.props.noncriticalInfrastructure[i][3]/(12 * this.props.waterSystemResults.connections)).toFixed(2)}</div>
            <br/>
          </div>)
      generatedJSX.push(generatedItem)
    }
    return generatedJSX;
  }

  targetWaterRate() {
    let cummulativeCriticalIncrease = 0;
    let generatedJSX = [];
    for (let i = 0; i < this.props.criticalInfrastructure.length; i++) {
      cummulativeCriticalIncrease += (this.props.criticalInfrastructure[i][3]/(12 * this.props.waterSystemResults.connections))
    }
    let generatedItem = (
    <div className="item target-rate">
      <div className="target-rate-div">Target Water Rate: ${(this.props.financialData.current_average_water_rate + cummulativeCriticalIncrease).toFixed(2)}</div>
    </div>
  )
  generatedJSX.push(generatedItem);
  return generatedJSX;
  }

  render() {
    return (
      <div id="dash-analysis" className="house">
        <div className="rate-increase-analysis">
          <h3 className="section-title">Water Rate Increase Analysis</h3>
          <div className="ui list">
            <div>{this.targetWaterRate()}</div>
            <div className="item">Current Average Water Rate:  ${this.props.financialData.current_average_water_rate}</div>
            <div className="item">Number of Service Connections: {this.props.waterSystemResults.connections}</div>
            <div>{this.revenueAndCostsGenerate()}</div>
          </div>
          {/* <h4 className="crit-inf-title">Critical Infrastructure Rate Increases</h4>
          <div className="ui list">
            <div>{this.rateIncreaseCriticalAnalysis()}</div>
          </div>
          <h4 className="noncrit-inf-title">Noncritical Infrastructure Rate Increases</h4>
          <div className="ui list">
            <div>{this.rateIncreaseNoncriticalAnalysis()}</div>
          </div> */}
        </div>
        {/* <div className="rate-finance-status">
          <h3 className="section-title">Rate and Finances Status</h3>
          <div className="ui list">
          </div>
        </div> */}
        <div className="infrastructure-analysis">
          <h3 className="section-title">Infrastructure Analysis</h3>
          <h4 className="crit-inf-title">Critical Infrastructure</h4>
            <div className="ui list critical-inftrastructure-list">
              <div>{this.criticalInfrastructureGenerate()}</div>
            </div>
          <h4 className="noncrit-inf-title">Noncritical Infrastructure</h4>
            <div className="ui list noncritical-inftrastructure-list">
              <div>{this.noncriticalInfrastructureGenerate()}</div>
            </div>
        </div>
      </div>
    );
  }
}

//
// <div className="column five wide"><h3>Current Financial Picture</h3>
//   <br/>
//   <ul>
//     <li>Current Average Rate: ${this.props.financialData.current_average_water_rate}</li>
//     <li>Annual Total Revenue: ${totalRevenue}</li>
//     <li>Annual Total Costs: ${totalCosts}</li>
//     <li>Surplus/Deficit: ${revCostDiff}</li>
//   </ul>
// </div>
// <div className="column five wide"><h3>Critical Infrastructure Analysis</h3>
//   <div className="ui grid">
//     <div className="flex-center-vertically column five wide">
//       <p>Name</p>
//       <ul>{this.renderCriticalInfrastructureName()}</ul>
//     </div>
//     <div className="column five wide">
//       <p>Est Remaining Useful Life</p>
//       <ul>{this.renderCriticalInfrastructureUsefulLife()}</ul>
//     </div>
//     <div className="column five wide">
//       <p>Est Annual $$$ For Replacement</p>
//       <ul>{this.renderCriticalInfrastructureAnnualContribution()}</ul>
//     </div>
//   </div>
// </div>
// <div className="column five wide">  <h3>Noncritical Infrastructure Analysis</h3>
//   <div className="ui grid">
//     <div className="flex-center-vertically column five wide">
//       <p>Name</p>
//       <ul>{this.renderNoncriticalInfrastructureName()}</ul>
//     </div>
//     <div className="column five wide">
//       <p>EstRemaining Useful Life</p>
//       <ul>{this.renderNoncriticalInfrastructureUsefulLife()}</ul>
//     </div>
//     <div className="column five wide">
//       <p>Est Annual $$$ For Replacement</p>
//       <ul>{this.renderNoncriticalInfrastructureAnnualContribution()}</ul>
//     </div>
//   </div>
// </div>


//
//  <div className="rfs-table">
//   <table className="ui very basic table">
//     <tbody>
//       <tr><td>{console.log(this.props)}</td></tr>
//       <tr>
//         <td>Current Average Water Rate:</td>
//         <td>${this.props.financialData.current_average_water_rate}</td>
//       </tr>
//       <tr>
//         <td>{`${budgetStatus}`}</td>
//         <td>${revCostDiff}</td>
//       </tr>
//       <tr>
//         <td>Annual Contribution to Reserve Fund:</td>
//         <td>${this.props.financialData.annual_savings_to_financial_reserves}</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
//
// <h5 className="source-name">Source Name</h5>
//   <table className="ui very basic table">
//     <tbody>
//       <tr>
//         <td>Estimated Remaining Useful Life</td>
//       </tr>
//     </tbody>
//   </table>
//
//
//
// <div className="item">
//   <div className="source-name">{this.props.criticalInfrastructure[0][0]}</div>
//   <div className="estimated-replacement-cost">Estimated Replacement Cost:       ${this.props.criticalInfrastructure[0][1]}</div>
//   <div className="estimated-useful-life">Estimated Remaining Useful Life: {this.props.criticalInfrastructure[0][2]} years</div>
//   <div className="reserve-fund-increase">Annual Increase to Reserve Fund for Eventual Replacement: ${this.props.criticalInfrastructure[0][3]}</div>
//   <div className="monthly-increase-per-connection">Monthly Increase per Connection:  ${(this.props.criticalInfrastructure[0][3]/(12 * 550)).toFixed(2)}</div>
// </div>
