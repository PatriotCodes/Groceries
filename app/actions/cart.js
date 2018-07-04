import { ADD_TO_CART } from "../constants/ActionTypes";

export function addToCart(productID) {
    return (dispatch) => {
        dispatch({type: ADD_TO_CART, productId: productID});
    };
}