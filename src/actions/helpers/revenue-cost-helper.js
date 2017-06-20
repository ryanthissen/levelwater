import axios from 'axios';

const ratesFinancesURL = 'https://levelwater-server.herokuapp.com/rates-finances-fixedcosts';

const revenueCostHelper = ( current_average_water_rate, total_financial_reserves, annual_revenue_water_sales, annual_revenue_fees_charges, annual_revenue_subsidies, annual_savings_to_financial_reserve, annual_personnel_costs, annual_operational_costs, annual_debt_costs, callback) => {
  let config = {
    headers: {'token': localStorage.getItem('token')}
  };
  
  let id = parseInt(localStorage.getItem('water_systems_id'));

  return axios.post(ratesFinancesURL, {
    water_systems_id: id,
    current_average_water_rate: parseInt(current_average_water_rate),
    total_financial_reserves: parseInt(total_financial_reserves),
    annual_revenue_water_sales: parseInt(annual_revenue_water_sales),
    annual_revenue_fees_charged: parseInt(annual_revenue_fees_charges),
    annual_revenue_subsidies: parseInt(annual_revenue_subsidies),
    annual_savings_to_financial_reserves: parseInt(annual_savings_to_financial_reserve),
    annual_personnel_costs: parseInt(annual_personnel_costs),
    annual_operations_costs: parseInt(annual_operational_costs),
    annual_debt_costs: parseInt(annual_debt_costs)
  }, config)
  .then((response) => {
    if (response.data.ErrorMessage) {
      alert(response.data.ErrorMessage);
    }
    else {
      localStorage.setItem('profileStepCompleted', 'revenue');
      callback();
    }
  });
};

export default revenueCostHelper;
