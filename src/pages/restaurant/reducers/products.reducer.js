import { UPDATE_PRODUCT_LIST } from "../actionTypes";

const initialProductsState = {}

export const productReducer = (product = initialProductsState , action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_LIST:
            return action.payload
            
        default:
            return product;
    }
}

