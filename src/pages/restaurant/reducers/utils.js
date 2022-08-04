import { MIN_ORDER_QUANTITY } from "../constants/globalConstants";

/*
    Used DRY(Don't Repeat Yourself) principle
    Used some concepts of functional programing
*/


const findCartItemByItemId = (cartItem,itemId) => cartItem.itemId === itemId;
const excludeCartItemByItemId = (itemId) =>(cartItem) => cartItem.itemId !== itemId;

const existingCartItem = (cartItems, itemIdToFind) => {
    return cartItems.find(cartItem => findCartItemByItemId(cartItem, itemIdToFind));
}

const increment = value => value + 1
const decrement = value => value - 1

const updateOrderQuantityByItemId = (cartItem, itemIdToUpdate, action) => (
    findCartItemByItemId(cartItem, itemIdToUpdate) ? 
    { ...cartItem, orderQuantity: action(cartItem?.orderQuantity) }
    : cartItem
)

const updateOrderQuantity = (cartItems, itemIdToUpdate, action)=>{
    return cartItems.map(cartItem => updateOrderQuantityByItemId(cartItem, itemIdToUpdate, action));
}

export const addItemToCart = (cartItems, itemIdToAdd) => {
    const existingItem = existingCartItem(cartItems, itemIdToAdd)
    if ( existingItem ) {
        return updateOrderQuantity(cartItems, itemIdToAdd, increment)
    }
    return [...cartItems, { itemId: itemIdToAdd, orderQuantity: MIN_ORDER_QUANTITY }];
};
  
export const removeItemFromCart = (cartItems, itemIdToRemove) => {
    const existingItem = existingCartItem(cartItems,itemIdToRemove);
    if (existingItem?.orderQuantity === MIN_ORDER_QUANTITY) {
        return cartItems.filter(excludeCartItemByItemId(itemIdToRemove));
    }
    return updateOrderQuantity(cartItems, itemIdToRemove, decrement)
};


const reduceProductsArrayToObject = (acc , item) => {acc[item?.id] = item; return acc}

export const addProductsData = (data)=>{
    return data.reduce( reduceProductsArrayToObject, {} )
}