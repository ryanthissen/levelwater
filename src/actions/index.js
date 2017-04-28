import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';


//api URLs
const loginURL = 'http://levelwater-server.herokuapp.com/login';
const signupURL = 'http://levelwater-server.herokuapp.com/users';


//Authentication

//helper function to make login api calls
function loginUser(email, password) {
  return axios
    .post(loginURL, {
      email: email,
      password: password
    })
    .then((response) => {
      if (response.data.ErrorMessage) {
        alert('bad username or password');
      }
      else {
        console.log('response', response);
        Cookies.set('token', response.data.token);
        let x = Cookies.get('token');
        console.log('x',x);
      }

    })
    // .then(() => {
    //   return axios
    //     .get('http://levelwater-server.herokuapp.com/users/1')
    //     .then((response) => {
    //       console.log(response);
    //     });
    // })
    .catch((error) => console.log(error))
}

function signupUser(email, firstName, lastName, password) {
  return axios
    .post(signupURL, {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName
    })
    .then((response) => {
      console.log('response', response);
      Cookies.set('token', response.data.token);
      let x = Cookies.get('token');
      console.log('x', x);
    })
    .catch((error) => console.log(error));
}

export const logUserIn = (email, password) => {
  return {
    type: 'LOG_USER_IN',
    payload: loginUser(email, password)
  };
};

export const signUserUp = (email, firstName, lastName, password) => {
  return {
    type: 'SIGN_USER_UP',
    payload: signupUser(email, firstName, lastName, password)
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
};

const pumpingDistHelper = () => {
  console.log('yo');
  return 'stuff';
};

const sourceInfoHelper = () => {
  console.log('yo');
  return 'stuff';
};

const treatmentInfoHelper = () => {
  console.log('yo');
  return 'stuff';
};

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
