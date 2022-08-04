import { ADD_TO_CART, ORDER_PLACED, REMOVE_FROM_CART, UPDATE_PRODUCT_LIST } from "./constants/actionTypes"


// created an abstract layer over functionality to update Store

export const addItemToCartAction = (itemId)=>({
        type: ADD_TO_CART,
        payload: {
            itemId
        }
    })

export const removeItemFromCartAction = (itemId) => ({
            type: REMOVE_FROM_CART,
            payload:{
                itemId
            }
        })

export const updateProductListAction = (data)=> ({
            type: UPDATE_PRODUCT_LIST,
            payload: data
        })

export const orderPlacedAction = ()=> ({type: ORDER_PLACED})


