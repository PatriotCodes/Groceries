import { AsyncStorage } from "react-native";
import { RECEIVE_PRODUCTS, REMOVE_PRODUCT, ADD_NEW_PRODUCT, LOADING } from '../constants/ActionTypes';
import productsData from '../api/products.json';

/*
    AsyncStorage is used to store products data, if no data is presented
    in the AsyncStorage, then json file will be used to load the
    initial data.
 */

export function getAllProducts() {
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, products) => {
            if (products !== null){
                dispatch({type: RECEIVE_PRODUCTS, products: JSON.parse(products)});
            } else {
                AsyncStorage.setItem('data', JSON.stringify(productsData.products));
                dispatch({type: RECEIVE_PRODUCTS, products: productsData.products});
            }
        })
    };
}

export function removeProduct(id){
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, products) => {
            if (products !== null){
                products = JSON.parse(products);
                const index = getIndexById(products, id);
                if(index !== -1) {
                    products.splice(index, 1);
                }
                dispatch({type: LOADING});
                AsyncStorage.setItem('data', JSON.stringify(products), () => {
                    dispatch({type: REMOVE_PRODUCT, products: products});
                });
            }
        });
    };
}

export function addNewProduct(product){
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, products) => {
            if (products !== null){
                products = JSON.parse(products);
                const newId = products[products.length - 1].id++;
                products.unshift({"id": newId, "title": product.toString()});
                dispatch({type: LOADING});
                AsyncStorage.setItem('data', JSON.stringify(products), () => {
                    dispatch({type: ADD_NEW_PRODUCT, products: products});
                });
            }
        });
    };
}

function getIndexById(data, id){
    let clone = JSON.parse(JSON.stringify(data));
    return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}