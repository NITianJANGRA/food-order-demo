import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { ADD_TO_CART, ORDER_PLACED, REMOVE_FROM_CART, UPDATE_PRODUCT_LIST } from "./actionTypes"


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

export const useActions = () => {
    const dispatch = useDispatch()
    
    const addItemToCart = (itemId)=> dispatch(addItemToCartAction(itemId))

    const removeItemFromCart = (itemId) => dispatch(removeItemFromCartAction(itemId))

    const updateProductList = (data)=> dispatch(updateProductListAction(data))

    const orderPlaced = ()=> dispatch(orderPlacedAction())

    
    const actions = {
        addItemToCart ,
        removeItemFromCart,
        updateProductList,
        orderPlaced
    }

    return useMemo(()=> actions,[actions])
}

