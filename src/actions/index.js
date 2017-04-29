import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

//import helper functions
import revenueCostHelper from './helpers/revenue-cost-helper';
import loginUser from './helpers/login-user';
import signupUser from './helpers/signup-user';
import basicUserInfoHelper from './helpers/basic-user-info-helper';
import pumpingDistHelper from './helpers/pumping-dist-helper';
import sourceInfoHelper from './helpers/source-info-helper';
import treatmentInfoHelper from './helpers/treatment-info-helper';



//Auth
export const logUserIn = (email, password, callback) => {
  return {
    type: 'LOG_USER_IN',
    payload: loginUser(email, password, callback)
  };
};

export const signUserUp = (email, firstName, lastName, password, callback) => {
  return {
    type: 'SIGN_USER_UP',
    payload: signupUser(email, firstName, lastName, password, callback)
  };
};

//forms
export const submitBasicUserInfo = (waterSystemName, PWSNum, numberOfConnections, CustomerPop) => {
  return {
    type: 'SUBMIT_BASIC_USER_INFO',
    payload: basicUserInfoHelper(waterSystemName, PWSNum, numberOfConnections, CustomerPop)
  };
};

export const submitRevenueCostInfo = (water_systems_id, current_average_water_rate, total_financial_reserves, annual_revenue_water_sales, annual_revenue_fees_charges, annual_revenue_subsidies, annual_savings_to_financial_reserve, annual_personnel_costs, annual_operational_costs, annual_debt_costs, callback) => {
  return {
    type: 'SUBMIT_REVENUE_COST_INFO',
    payload: revenueCostHelper(water_systems_id, current_average_water_rate, total_financial_reserves, annual_revenue_water_sales, annual_revenue_fees_charges, annual_revenue_subsidies, annual_savings_to_financial_reserve, annual_personnel_costs, annual_operational_costs, annual_debt_costs, callback)
  };
};

export const submitSourceInfo = (ratePerConnection, waterSalesrev, feesChargesRev, subsidiesRev, reserveFundTotal, reserveFundContribution, personnelCosts, operationsCosts, debtFinancing) => {
  return {
    type: 'SUBMIT_SOURCE_INFO',
    payload: sourceInfoHelper(ratePerConnection, waterSalesrev, feesChargesRev, subsidiesRev, reserveFundTotal, reserveFundContribution, personnelCosts, operationsCosts, debtFinancing)
  };
};

export const submitPumpInfo = (distLength, numberOfValves, numberOfMeters, numberOfPumpingPlants, combinedPumpCapacity, pumpsCondition) => {
  return {
    type: 'SUBMIT_PUMP_INFO',
    payload: pumpingDistHelper(distLength, numberOfValves, numberOfMeters, numberOfPumpingPlants, combinedPumpCapacity, pumpsCondition)
  };
};

export const submitTreatmentInfo = (treatmentPlantName, treatmentType, yearOfConstruction, treatmentCapacity, treatmentCritical) => {
  return {
    type: 'SUBMIT_TREATMENT_INFO',
    payload: treatmentInfoHelper(treatmentPlantName, treatmentType, yearOfConstruction, treatmentCapacity, treatmentCritical)
  };
};
