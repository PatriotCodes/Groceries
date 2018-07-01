import { combineReducers } from 'redux';
import * as cartReducers from './cart';
import * as productsReducers from './products';

export default combineReducers (Object.assign(
    cartReducers,
    productsReducers
));