import * as types from '../constants/ActionTypes';
import products from '../api/products';
import {RECEIVE_PRODUCTS} from "../constants/ActionTypes";

export function receiveProducts({products}) {
    return {
        type: types.RECEIVE_PRODUCTS,
        products
    }
}

export function getAllProducts() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: RECEIVE_PRODUCTS, products: products});
        }, 1000);

    };
}
