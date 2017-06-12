import React, { Component } from 'react';

export default class DashAnalysis extends Component {

  doMath() {
    let totalRevenue = this.props.financialData.annual_revenue_water_sales + this.props.financialData.annual_revenue_fees_charged + this.props.financialData.annual_revenue_subsidies;
    let totalCosts = this.props.financialData.annual_personnel_costs + this.props.financialData.annual_operations_costs + this.props.financialData.annual_debt_costs;
    let revCostDiff = totalRevenue - totalCosts;
    return { totalRevenue, totalCosts, revCostDiff };
  }

  renderCriticalInfrastructureName() {
    return this.props.criticalInfrastructure.map((element) => {
      return <li>{element[0]}</li>;
    });
  }

  renderCriticalInfrastructureUsefulLife() {
    return this.props.criticalInfrastructure.map((element) => {
      return <li>{element[2]}</li>;
    });
  }

  renderCriticalInfrastructureAnnualContribution() {
    return this.props.criticalInfrastructure.map((element) => {
      return <li>${element[3]}</li>;
    });
  }

  renderNoncriticalInfrastructureName() {
    return this.props.noncriticalInfrastructure.map((element) => {
      return <li>{element[0]}</li>;
    });
  }

  renderNoncriticalInfrastructureUsefulLife() {
    return this.props.noncriticalInfrastructure.map((element) => {
      return <li>{element[2]}</li>;
    });
  }

  renderNoncriticalInfrastructureAnnualContribution() {
    return this.props.noncriticalInfrastructure.map((element) => {
      return <li>${element[3]}</li>;
    });
  }

  render() {
    let {totalRevenue, totalCosts, revCostDiff } = this.doMath();
    return (
      <div id="dash-analysis" className="ui grid">
        <div className="column five wide"><h3>Current Financial Picture</h3>
        <br/>
        <ul>
          <li>Current Average Rate: ${this.props.financialData.current_average_water_rate}</li>
          <li>Annual Total Revenue: ${totalRevenue}</li>
          <li>Annual Total Costs: ${totalCosts}</li>
          <li>Surplus/Deficit: ${revCostDiff}</li>
        </ul></div>

        <div className="column five wide"><h3>Critical Infrastructure Analysis</h3>
        <div className="ui grid">
          <div className="flex-center-vertically column five wide">
            <p>Name</p>
            <ul>{this.renderCriticalInfrastructureName()}</ul>
          </div>
          <div className="column five wide">
            <p>Est Remaining Useful Life</p>
            <ul>{this.renderCriticalInfrastructureUsefulLife()}</ul>
          </div>
          <div className="column five wide">
            <p>Est Annual $$$ For Replacement</p>
            <ul>{this.renderCriticalInfrastructureAnnualContribution()}</ul>
          </div>
        </div></div>

        <div className="column five wide">  <h3>Noncritical Infrastructure Analysis</h3>
          <div className="ui grid">
            <div className="flex-center-vertically column five wide">
              <p>Name</p>
              <ul>{this.renderNoncriticalInfrastructureName()}</ul>
            </div>
            <div className="column five wide">
              <p>EstRemaining Useful Life</p>
              <ul>{this.renderNoncriticalInfrastructureUsefulLife()}</ul>
            </div>
            <div className="column five wide">
              <p>Est Annual $$$ For Replacement</p>
              <ul>{this.renderNoncriticalInfrastructureAnnualContribution()}</ul>
            </div>
          </div></div>





      </div>
    );
  }
}
