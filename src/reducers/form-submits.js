const formSubmits = (state = null, action) => {
  switch (action.type) {
    case 'SUBMIT_BASIC_USER_INFO':
      return action.payload;
    default:
      return state;
  }
};

export default formSubmits;
