// rootreducer/rootreducer.js
import { combineReducers } from 'redux';
import authReducer from '../Action/action';
import cartReducer from '../ADD_To_Cart/Add_to_cart';
import likesReducer from '../LikeRedux/Likeredux';


const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    likes: likesReducer,

});

export default rootReducer;
