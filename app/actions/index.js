import * as cartActions from './cart';
import * as productsActions from './products';

export const ActionCreators = Object.assign({},
    cartActions,
    productsActions
);