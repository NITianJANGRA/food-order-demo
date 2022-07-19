import { ADD_TO_CART, ORDER_PLACED, REMOVE_FROM_CART, SET_LOADER, UNSET_LOADER, UPDATE_PRODUCT_LIST } from "./reducer"

// created an abstract layer over functionality to update Store

export const getActions = (dispatch) => {
    
    const addItemToCart = (itemId)=>{
        dispatch({
            type: ADD_TO_CART,
            payload: {
                itemId
            }
        })
    }

    const removeItemFromCart = (itemId) => {
        dispatch(
            {
                type: REMOVE_FROM_CART,
                payload:{
                    itemId
                }
            }
        )
    }

    const setLoader = ()=>{
        dispatch(
            {
                type: SET_LOADER
            }
        )
    }

    const unsetLoader = ()=>{
        dispatch(
            {
                type: UNSET_LOADER
            }
        )
    }

    const updateProductList = (data)=>{
        dispatch(
            {
                type: UPDATE_PRODUCT_LIST,
                payload: data
            }
        )
    }

    const orderPlaced = ()=>{
        dispatch(
            {
                type: ORDER_PLACED
            }
        )
    }

    return {
        setLoader,
        unsetLoader,
        addItemToCart ,
        removeItemFromCart,
        updateProductList,
        orderPlaced
    }
}