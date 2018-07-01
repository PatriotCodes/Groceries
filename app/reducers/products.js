import * as types from '../constants/ActionTypes';
import createReducer from "../lib/createReducer";

let initialState = { products: [], loading: true };

export const allProducts = createReducer({},{
    [types.RECEIVE_PRODUCTS](state = initialState, action) {
        state = Object.assign({}, state, { products: action.products, loading: false });
        return state;
    }
});