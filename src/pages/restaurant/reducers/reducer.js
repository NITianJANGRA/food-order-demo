import { combineReducers } from "redux";

import { cartReducer } from "./cart.reducer";
import { productReducer } from "./products.reducer";

const reducers = {
    products: productReducer,
    cart: cartReducer
}

export const combinedReducer = combineReducers(reducers)
