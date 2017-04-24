import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from './login';
import signup from './signup';
import formSubmits from './form-submits';

const LWApp = combineReducers ({

  login,
  signup,
  formSubmits,
  form: formReducer

});

export default LWApp;
