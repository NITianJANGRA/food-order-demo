import { createSelector } from "@reduxjs/toolkit";

export const Products = store => store?.products;
export const ProductById = itemId => createSelector(Products, products=>products[itemId])