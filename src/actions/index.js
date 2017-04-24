
//Authentication
export const logUserIn = (email, password) => {
  return {
    type: 'LOG_USER_IN',
    payload: {email: password}
  };
};
