import { createSelector } from "@reduxjs/toolkit";

export const Cart = store => store?.cart;
export const CartCount = store => store?.cart?.length;
const matchItemId = (cartItem, itemId)=> cartItem?.itemId === itemId
const findInCart = (cart, itemId) => cart.find(cartItem => matchItemId(cartItem,itemId))
export const ItemInCart = itemId => createSelector(Cart, cart => findInCart(cart,itemId) )