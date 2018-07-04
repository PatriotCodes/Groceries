import { RECEIVE_PRODUCTS } from '../constants/ActionTypes';
import productsData from '../api/products.json';

export function getAllProducts() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: RECEIVE_PRODUCTS, products: JSON.stringify(productsData.products)});
        }, 1000);
    };
}
