const dashButtons = (state = {}, action) => {
  switch (action.type) {
  case 'SUBMIT_RATES_COSTS_BUTTON_FULFILLED':
    return action.payload;
  case 'LOAD_CHART_FULFILLED':
    return action.payload;
  default:
    return state;
  }
};

export default dashButtons;
