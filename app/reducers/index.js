import { combineReducers } from 'redux';
import cartReducer from './cart';
import productsReducer  from './products';

const rootReducer = combineReducers ({
    cartReducer,
    productsReducer
});

export default rootReducer;