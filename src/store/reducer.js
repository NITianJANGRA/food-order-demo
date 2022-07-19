import { addItemToCart, removeItemFromCart } from "./utils";

// used constants to avoid typo and it make easy to make modifications
export const UPDATE_PRODUCT_LIST = 'UPDATE_PRODUCT_LIST';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_LOADER = 'SET_LOADER';
export const UNSET_LOADER = 'UNSET_LOADER';
export const ORDER_PLACED = 'ORDER_PLACED';

export const initialState = {
    isLoading: false,
    products: {},
    cart: []
}

export const cartReducer = (state, action) =>{
    switch (action.type) {
        case UPDATE_PRODUCT_LIST:
            return {
                ...state,
                products: action.payload
            }
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
        case SET_LOADER:
            return{
                ...state,
                isLoading: true
            }
        case UNSET_LOADER:
            return{
                ...state,
                isLoading: false
            }
        case ORDER_PLACED:
            return{
                ...state,
                cart: []
            }
        default:
            return state;
    }
}