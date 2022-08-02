import { UPDATE_PRODUCT_LIST } from "../constants/actionTypes";
import { addProductsData } from "./utils";

const initialProductsState = {}

export const productReducer = (product = initialProductsState , action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_LIST:
            return addProductsData(action.payload)
            
        default:
            return product;
    }
}

