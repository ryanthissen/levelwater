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
import storageInfoHelper from './helpers/storage-info-helper';
import submitRatesCostsHelper from './helpers/submit-rates-costs-helper';



//Auth
export const logUserIn = (email, password, callback) => {
  return {
    type: 'LOG_USER_IN',
    payload: loginUser(email, password, callback)
  };
};

export const signUserUp = (email, firstName, lastName, password, passwordConfirm, callback) => {
  return {
    type: 'SIGN_USER_UP',
    payload: signupUser(email, firstName, lastName, password, passwordConfirm, callback)
  };
};

//forms
export const submitBasicUserInfo = (pws_name, pws_id, population, connections, callback) => {
  return {
    type: 'SUBMIT_BASIC_USER_INFO',
    payload: basicUserInfoHelper(pws_name, pws_id, population, connections, callback)
  };
};

export const submitRevenueCostInfo = ( current_average_water_rate, total_financial_reserves, annual_revenue_water_sales, annual_revenue_fees_charges, annual_revenue_subsidies, annual_savings_to_financial_reserve, annual_personnel_costs, annual_operational_costs, annual_debt_costs, callback) => {
  return {
    type: 'SUBMIT_REVENUE_COST_INFO',
    payload: revenueCostHelper( current_average_water_rate, total_financial_reserves, annual_revenue_water_sales, annual_revenue_fees_charges, annual_revenue_subsidies, annual_savings_to_financial_reserve, annual_personnel_costs, annual_operational_costs, annual_debt_costs, callback)
  };
};

export const submitSourceInfo = (source_name, source_type, treatment, critical_to_operations, year_constructed, capacity, condition, continuous_chlorination, callback) => {
  return {
    type: 'SUBMIT_SOURCE_INFO',
    payload: sourceInfoHelper(source_name, source_type, treatment, critical_to_operations, year_constructed, capacity, condition, continuous_chlorination, callback)
  };
};

export const submitPumpInfo = (total_length_miles, average_age_of_pipes, average_main_diameter_inches, condition, callback) => {
  return {
    type: 'SUBMIT_PUMP_INFO',
    payload: pumpingDistHelper(total_length_miles, average_age_of_pipes, average_main_diameter_inches, condition, callback)
  };
};

export const submitTreatmentInfo = (treatment_name, treatment_type, critical_to_operations, year_constructed, capacity, condition, callback) => {
  return {
    type: 'SUBMIT_TREATMENT_INFO',
    payload: treatmentInfoHelper(treatment_name, treatment_type, critical_to_operations, year_constructed, capacity, condition, callback)
  };
};

export const submitStorageInfo = (reservoir_type, reservoir_name, year_constructed, capacity, condition, critical_to_operations, callback) => {
  return {
    type: 'SUBMIT_STORAGE_INFO',
    payload: storageInfoHelper(reservoir_type, reservoir_name, year_constructed, capacity, condition, critical_to_operations, callback)
  };
};

//dashboard
export const submitRatesCostsButton = (callback) => {
  return {
    type: 'SUBMIT_RATES_COSTS_BUTTON',
    payload: submitRatesCostsHelper(callback)
  };
};
