import { configureStore } from "@reduxjs/toolkit";
import { combinedReducer } from "./reducers/reducer";


const loggerMiddleware = store => next => action => {
//    console.log(store.getState(), action);  // only for debuging
   next(action);
  }

export const store = configureStore({
    reducer : combinedReducer,
    middleware: [loggerMiddleware]
})
