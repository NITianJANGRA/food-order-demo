export const UPDATE_PRODUCT_LIST = 'UPDATE_PRODUCT_LIST';

const initialProductsState = {}

export const productReducer = (product = initialProductsState , action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_LIST:
            return action.payload
            
        default:
            return product;
    }
}

