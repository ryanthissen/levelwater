import axios from 'axios';

const ratesFinancesURL = 'http://levelwater-server.herokuapp.com/ratesFinances';

const revenueCostHelper = (water_systems_id, current_average_water_rate, total_financial_reserves, annual_revenue_water_sales, annual_revenue_fees_charges, annual_revenue_subsidies, annual_savings_to_financial_reserve, annual_personnel_costs, annual_operational_costs, annual_debt_costs, callback) => {
  return axios
    .post(ratesFinancesURL, {
      water_systems_id: water_systems_id,
      current_average_water_rate: current_average_water_rate,
      total_financial_reserves: total_financial_reserves,
      annual_revenue_water_sales: annual_revenue_water_sales,
      annual_revenue_fees_charges: annual_revenue_fees_charges,
      annual_revenue_subsidies: annual_revenue_subsidies,
      annual_savings_to_financial_reserve: annual_savings_to_financial_reserve,
      annual_personnel_costs: annual_personnel_costs,
      annual_operational_costs: annual_operational_costs,
      annual_debt_costs: annual_debt_costs
    })
    .then((response) => {
      if (response.data.errorMessage) {
        console.log('response', response);
        alert('something went wrong.');
      }
      else {
        console.log('response', response);
        callback();
      }
    });
};

export default revenueCostHelper;
