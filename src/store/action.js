import { ADD_TO_CART, REMOVE_FROM_CART } from "./reducer"


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

    return {
        addItemToCart ,
        removeItemFromCart
    }
}