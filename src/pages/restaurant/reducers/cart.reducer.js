import { addItemToCart, removeItemFromCart } from "./utils";

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ORDER_PLACED = 'ORDER_PLACED';

const initialCartState = []

export const cartReducer = (cart = initialCartState, action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return addItemToCart(cart, action.payload.itemId);

        case REMOVE_FROM_CART:
            return removeItemFromCart(cart, action.payload.itemId)

        case ORDER_PLACED:
            return initialCartState;

        default:
            return cart;
    }
}