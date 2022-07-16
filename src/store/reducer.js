import { menuItemsData } from "./helper";
import { addItemToCart, removeItemFromCart } from "./utils";

// used constants to avoid typo and it make easy to make modifications
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const initialState = {
    products: menuItemsData,
    cart: []
}

export const cartReducer = (state, action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: addItemToCart(state.cart, action.payload.itemId)
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart: removeItemFromCart(state.cart, action.payload.itemId)
            }
    
        default:
            return state;
    }
}