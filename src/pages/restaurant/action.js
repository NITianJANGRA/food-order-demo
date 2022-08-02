import { useMemo } from "react"
import { useDispatch } from "react-redux"

import { ADD_TO_CART, ORDER_PLACED, REMOVE_FROM_CART, UPDATE_PRODUCT_LIST } from "./constants/actionTypes"


// created an abstract layer over functionality to update Store

export const addItemToCartAction = (itemId)=>{
    return {
        type: ADD_TO_CART,
        payload: {
            itemId
        }
    }
}

export const removeItemFromCartAction = (itemId) => {
    return {
            type: REMOVE_FROM_CART,
            payload:{
                itemId
            }
        }
}

export const updateProductListAction = (data)=>{
    return{
            type: UPDATE_PRODUCT_LIST,
            payload: data
        }
}

export const orderPlacedAction = ()=>{
    return{
            type: ORDER_PLACED
        }
}

export const addItemToCart = (dispatch) => (itemId)=> dispatch(addItemToCartAction(itemId))

export const removeItemFromCart = (dispatch) => (itemId) => dispatch(removeItemFromCartAction(itemId))

export const updateProductList = (dispatch) => (data)=> dispatch(updateProductListAction(data))

export const orderPlaced = (dispatch) => ()=> dispatch(orderPlacedAction())

const getActions = (dispatch) => {

    return {
        addItemToCart : addItemToCart(dispatch)  ,
        removeItemFromCart : removeItemFromCart(dispatch),
        updateProductList : updateProductList(dispatch),
        orderPlaced : orderPlaced(dispatch),
    }

}

export const useActions = ()=>{
    const dispatch = useDispatch()
    return useMemo(()=> getActions(dispatch),[dispatch] )
}

