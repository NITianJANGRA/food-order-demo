import { menuItemsData } from "./helper";
import { addItemToCart, removeItemFromCart } from "./utils";

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


export const initialState = {
    products: menuItemsData,
    cart: [{itemId : '2', orderQuantity : 3}, {itemId : '1', orderQuantity : 3}]
}

/* 
    product = {
      id: 
      name: 
      info: 
      price: 
      quantity: 
      img: 
    },
    cart = {
        id:
        itemId:
        orderQuantity:
    }
*/

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