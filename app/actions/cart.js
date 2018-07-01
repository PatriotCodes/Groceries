import * as types from '../constants/ActionTypes';

export const addToCart = productId => {
    return {
        type: types.ADD_TO_CART,
        productId
    }
};