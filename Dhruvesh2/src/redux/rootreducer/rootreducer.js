// rootReducer.js
import { combineReducers } from 'redux';
import businessProfileReducer from '../Busnessdetailstore/BussinessAction';

const rootReducer = combineReducers({
  businessProfile: businessProfileReducer,
});

export default rootReducer;
