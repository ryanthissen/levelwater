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

export const submitBasicUserInfo = (waterSystemName, PWSNum, numberOfConnections, CustomerPop) => {
  return {
    type: 'SUBMIT_BASIC_USER_INFO',
    payload: basicUserInfoHelper(waterSystemName, PWSNum, numberOfConnections, CustomerPop)
  };
};
