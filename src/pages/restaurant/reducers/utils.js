
/*
    Used DRY(Don't Repeat Yourself) principle
    Used some concepts of functional programing
*/

const existingCartItem = (cartItems, itemIdToFind) => {
    return cartItems.find( cartItem => cartItem.itemId === itemIdToFind);
}

const increment = value => value + 1
const decrement = value => value - 1

const updateOrderQuantity = (cartItems, itemIdToUpdate, action)=>{
    return cartItems.map((cartItem) =>
    cartItem?.itemId === itemIdToUpdate
        ? { ...cartItem, orderQuantity: action(cartItem?.orderQuantity) }
        : cartItem
    );
}

export const addItemToCart = (cartItems, itemIdToAdd) => {
    
    const existingItem = existingCartItem(cartItems, itemIdToAdd)

    if ( existingItem ) {
        return updateOrderQuantity(cartItems, itemIdToAdd, increment)
    }

    return [...cartItems, { itemId: itemIdToAdd, orderQuantity: 1 }];
};
  
export const removeItemFromCart = (cartItems, itemIdToRemove) => {
    
    const existingItem = existingCartItem(cartItems,itemIdToRemove);
    
    if (existingItem?.orderQuantity === 1) {
        return cartItems.filter((cartItem) => cartItem.itemId !== itemIdToRemove);
    }
    return updateOrderQuantity(cartItems, itemIdToRemove, decrement)
};
