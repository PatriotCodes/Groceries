import { ADD_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../constants/ActionTypes';

let initialState = { addedIDs: [] };

export default cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                addedIDs: [...state.addedIDs, action.productId]
            }
        }
        case REMOVE_PRODUCT_FROM_CART: {
            return state;
        }
        default:
            return state;
    }
}