import { createContext, useContext, useReducer } from "react";
import { getActions } from "./action";
import { cartReducer, initialState } from "./reducer";

const Store = createContext()

// HOC to inject data to App
const Context = ({children})=>{
    const [state, dispatch] = useReducer(cartReducer, initialState)
    const ACTIONS = getActions(dispatch);
    return (
        <Store.Provider value={{state, ACTIONS}} >
            {children}
        </Store.Provider>
    )

}

// Custom hook wrapped around useContext to access store
export const useStore = () =>{
    return useContext(Store)
} 

export default Context;