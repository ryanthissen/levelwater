import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from './login';
import signup from './signup';

const LWApp = combineReducers ({

  login,
  signup,
  form: formReducer

});

export default LWApp;
