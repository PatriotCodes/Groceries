import { ADD_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../constants/ActionTypes";

export function addToCart(productID) {
    return (dispatch) => {
        dispatch({type: ADD_TO_CART, productID: productID});
    };
}

export function removeFromCart(productID) {
    return (dispatch) => {
        dispatch({type: REMOVE_PRODUCT_FROM_CART, productID: productID});
    };
}