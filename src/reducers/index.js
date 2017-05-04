import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from './login';
import signup from './signup';
import formSubmits from './form-submits';
import dashButtons from './dash-buttons';

const LWApp = combineReducers ({

  login,
  signup,
  formSubmits,
  dashButtons,
  form: formReducer

});

export default LWApp;
