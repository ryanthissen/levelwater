const dashButtons = (state = null, action) => {
  switch (action.type) {
  case 'SUBMIT_RATES_COSTS_BUTTON':
    return action.payload;
  default:
    return state;
  }
};

export default dashButtons;
