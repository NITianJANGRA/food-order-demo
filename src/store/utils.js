const existingCartItem = (cartItems, itemIdToFind) => {
    return cartItems.find( cartItem => cartItem.itemId === itemIdToFind);
}


export const addItemToCart = (cartItems, itemIdToAdd) => {
    
    const existingItem = existingCartItem(cartItems, itemIdToAdd)

    if ( existingItem ) {
        return cartItems.map((cartItem) =>
        cartItem.itemId === itemIdToAdd
            ? { ...cartItem, orderQuantity: cartItem.orderQuantity + 1 }
            : cartItem
        );
    }

    return [...cartItems, { itemId: itemIdToAdd, orderQuantity: 1 }];
};
  
export const removeItemFromCart = (cartItems, itemIdToRemove) => {
    
    const existingItem = existingCartItem(cartItems,itemIdToRemove);
    
    if (existingItem.orderQuantity === 1) {
        return cartItems.filter((cartItem) => cartItem.itemId !== itemIdToRemove);
    }
    return cartItems.map((cartItem) =>
        cartItem.itemId === itemIdToRemove
        ? { ...cartItem, orderQuantity: cartItem.orderQuantity - 1 }
        : cartItem
    );
};
