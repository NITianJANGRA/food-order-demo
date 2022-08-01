import { ADD_TO_CART, ORDER_PLACED, REMOVE_FROM_CART } from "../actionTypes";
import { addItemToCart, removeItemFromCart } from "./utils";


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