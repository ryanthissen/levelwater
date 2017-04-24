
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
