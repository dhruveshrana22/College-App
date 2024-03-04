// rootReducer.js
import { combineReducers } from 'redux';
import itemReducer from '../itemaction';
import saleItemReducer from '../itemaction';
import saleReducer from '../sale';

const rootReducer = combineReducers({
  saleItems: saleItemReducer,
  sale:saleReducer,
});

export default rootReducer;
