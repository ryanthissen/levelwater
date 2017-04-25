const login = (state = null, action) => {
  switch (action.type) {
    case 'LOG_USER_IN':
      return action.payload;
    default:
      return state;
  }
};

export default login;
