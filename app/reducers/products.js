import { RECEIVE_PRODUCTS } from "../constants/ActionTypes";

let initialState = { products: [], loading: true };

export default productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS: {
            state = Object.assign({}, state, { products: action.products, loading: false });
            return state;
        }
        default:
            return state;
    }
};