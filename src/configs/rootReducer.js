/* eslint-disable */

import {combineReducers} from 'redux';
import {formReducer} from '../reducers/formReducer';
import {authReducer} from '../reducers/authReducer';

export const rootReducer = combineReducers({
  formReducer,
  authReducer,
});
