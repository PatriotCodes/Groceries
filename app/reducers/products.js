import { RECEIVE_PRODUCTS, REMOVE_PRODUCT, ADD_NEW_PRODUCT, LOADING } from "../constants/ActionTypes";

let initialState = { products: [], loading: true };

export default productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS: {
            state = Object.assign({}, state, { products: action.products, loading: false });
            return state;
        }
        case LOADING: {
            state = Object.assign({}, state, {loading: true});
            return state;
        }
        case REMOVE_PRODUCT: {
            state = Object.assign({}, state, { products: action.products, loading: false });
            return state;
        }
        case ADD_NEW_PRODUCT: {
            state = Object.assign({}, state, { products: action.products });
            return state;
        }
        default:
            return state;
    }
};

function cloneObject(object){
    return JSON.parse(JSON.stringify(object));
}

function getIndexById(data, id){
    let clone = JSON.parse(JSON.stringify(data));
    return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}