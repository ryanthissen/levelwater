const formSubmits = (state = null, action) => {
  switch (action.type) {
  case 'SUBMIT_BASIC_USER_INFO':
    return action.payload;
  case 'SUBMIT_REVENUE_COST_INFO':
    return action.payload;
  case 'SUBMIT_PUMP_INFO':
    return action.payload;
  case 'SUBMIT_SOURCE_INFO':
    return action.payload;
  case 'SUBMIT_TREATMENT_INFO':
    return action.payload;
  default:
    return state;
  }
};

export default formSubmits;
