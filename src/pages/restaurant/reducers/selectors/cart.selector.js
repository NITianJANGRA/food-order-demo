import { createSelector } from "@reduxjs/toolkit";

export const Cart = store => store?.cart;
export const CartCount = store => store?.cart?.length;
export const ItemInCart = itemId => createSelector(Cart, cart => cart.find((order)=> order?.itemId === itemId) )