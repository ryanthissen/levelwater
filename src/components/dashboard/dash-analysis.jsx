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
        </div>
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
