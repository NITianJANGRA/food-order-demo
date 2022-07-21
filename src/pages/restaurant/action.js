import { useDispatch } from "react-redux"
import { ADD_TO_CART, ORDER_PLACED, REMOVE_FROM_CART } from "./reducers/cart.reducer"
import { SET_LOADER, UNSET_LOADER } from "./reducers/loading.reducer"
import { UPDATE_PRODUCT_LIST } from "./reducers/products.reducer"


// created an abstract layer over functionality to update Store

export const useActions = () => {
    const dispatch = useDispatch()
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

