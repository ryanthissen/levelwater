const signup = (state = null, action) => {
  switch (action.type) {
    case 'SIGN_USER_UP':
      return action.payload;
    default:
      return state;
  }
};

export default signup;
