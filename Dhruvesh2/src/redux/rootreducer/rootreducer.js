// rootReducer.js
import { combineReducers } from 'redux';
import itemReducer from '../itemaction';
import saleItemReducer from '../itemaction';
import saleReducer from '../sale';
import productReducer from '../Productreducer';

const rootReducer = combineReducers({
  saleItems: saleItemReducer,
  sale:saleReducer,
  products:productReducer,
});

export default rootReducer;
