import { ADD_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../constants/ActionTypes';

let initialState = { addedIDs: [] };

export default cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const nextState = JSON.parse(JSON.stringify(state));
            nextState.addedIDs.push(action.productID);
            return nextState;
        }
        case REMOVE_PRODUCT_FROM_CART: {
            const nextState = JSON.parse(JSON.stringify(state));
            const index = nextState.addedIDs.indexOf(action.productID);
            nextState.addedIDs.splice(index,1);
            return nextState;
        }
        default:
            return state;
    }
}