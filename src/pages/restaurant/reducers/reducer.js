import { combineReducers } from "redux";
import { cartReducer } from "./cart.reducer";
import { loadingReducer } from "./loading.reducer";
import { productReducer } from "./products.reducer";

const reducers = {
    isLoading: loadingReducer,
    products: productReducer,
    cart: cartReducer
}

export const combinedReducer = combineReducers(reducers)
