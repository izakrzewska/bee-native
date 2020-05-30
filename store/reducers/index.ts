import { combineReducers } from 'redux';
import apiariesReducer from './apiaries';

export const rootReducer = combineReducers({
  apiaries: apiariesReducer,
});
