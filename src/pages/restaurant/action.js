import { useDispatch } from "react-redux"
import { ADD_TO_CART, ORDER_PLACED, REMOVE_FROM_CART } from "./reducers/cart.reducer"
import { SET_LOADER, UNSET_LOADER } from "./reducers/loading.reducer"
import { UPDATE_PRODUCT_LIST } from "./reducers/products.reducer"


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

export const setLoaderAction = ()=>{
    return{
            type: SET_LOADER
        }
}

export const unsetLoaderAction = ()=>{
    return{
            type: UNSET_LOADER
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
    
    const addItemToCart = (itemId)=>{
        dispatch(addItemToCartAction(itemId))
    }

    const removeItemFromCart = (itemId) => {
        dispatch(removeItemFromCartAction(itemId))
    }

    const setLoader = ()=>{
        dispatch(setLoaderAction())
    }

    const unsetLoader = ()=>{
        dispatch(unsetLoaderAction())
    }

    const updateProductList = (data)=>{
        dispatch(updateProductListAction(data))
    }

    const orderPlaced = ()=>{
        dispatch(orderPlacedAction())
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

