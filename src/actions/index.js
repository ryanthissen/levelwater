import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'


//Authentication
export const logUserIn = (email, password) => {
  return {
    type: 'LOG_USER_IN',
    payload: {
      email: email,
      password: password
    }
  };
};

export const signUserUp = (email, firstName, lastName, password) => {
  return {
    type: 'SIGN_USER_UP',
    payload: {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password
    }
  };
};

//Forms

const basicUserInfoHelper = () => {
  console.log('yo!');
  return 'stuff';
};

const revenueCostHelper = () => {
  console.log('yo');
  return 'stuff';
}

const pumpingDistHelper = () => {
  console.log('yo');
  return 'stuff';
}

export const submitBasicUserInfo = (waterSystemName, PWSNum, numberOfConnections, CustomerPop) => {
  return {
    type: 'SUBMIT_BASIC_USER_INFO',
    payload: basicUserInfoHelper(waterSystemName, PWSNum, numberOfConnections, CustomerPop)
  };
};

export const submitRevenueCostInfo = (ratePerConnection, waterSalesrev, feesChargesRev, subsidiesRev, reserveFundTotal, reserveFundContribution, personnelCosts, operationsCosts, debtFinancing) => {
  return {
    type: 'SUBMIT_REVENUE_COST_INFO',
    payload: revenueCostHelper(ratePerConnection, waterSalesrev, feesChargesRev, subsidiesRev, reserveFundTotal, reserveFundContribution, personnelCosts, operationsCosts, debtFinancing)
  };
};

export const submitSourceInfo = (ratePerConnection, waterSalesrev, feesChargesRev, subsidiesRev, reserveFundTotal, reserveFundContribution, personnelCosts, operationsCosts, debtFinancing) => {
  return {
    type: 'SUBMIT_SOURCE_INFO',
    payload: (ratePerConnection, waterSalesrev, feesChargesRev, subsidiesRev, reserveFundTotal, reserveFundContribution, personnelCosts, operationsCosts, debtFinancing)
  };
};

export const submitPumpInfo = (distLength, numberOfValves, numberOfMeters, numberOfPumpingPlants, combinedPumpCapacity, pumpsCondition) => {
  return {
    type: 'SUBMIT_PUMP_INFO',
    payload: pumpingDistHelper(distLength, numberOfValves, numberOfMeters, numberOfPumpingPlants, combinedPumpCapacity, pumpsCondition)
  };
};
