import { useCallback, useState } from "react"

// let instance;
// let isLoading = false;
// class Loader {
//     constructor(){
//         if (instance) {
//             throw new Error("You can only create one instance!");
//         }
//         instance = this;
//     }

//     updateLoadingState(newState){
//         isLoading = newState
//     }
// }

// export const useLoading = () =>{
//     let instance;
//     const createNewInstance = () => {
//         const [isLoading, updateLoadingState] = useState(false)
//         instance = {isLoading, updateLoadingState}
//     }

//     if(!instance) return createNewInstance()
//     return instance
// }

// let isLoading = false;

// export const useLoading = () =>{
//     const updateLoadingState = useCallback((newState)=>{isLoading = newState},[])
//     return {isLoading, updateLoadingState}
// }


// export const useLoading = () =>{
//     let ref;
//     if(!ref){
//         ref = useRef(true)
//     }
//     const updateLoadingState = (newState) => { ref.current = newState }
//     return {isLoading : ref.current , updateLoadingState}
// }

// const createLoadingState = ()=>{
//     const [isLoading, updateLoadingState] = useState(false);
//     return ()=>{return{isLoading, updateLoadingState}}
// }

// export const useLoading = ()=>{
//     const [isLoading, updateLoadingState] = useState(false)
//     return {isLoading, updateLoadingState}
// }


// const useCreateLoadingState = ()=>{
//     const [isLoading, updateLoadingState] = useState()
//     instance = {isLoading, updateLoadingState}
//     return instance
// }
const INITIAL_LOADING_STATE = false
export const useLoading = ()=>{
    const [isLoading, setLoading] = useState(INITIAL_LOADING_STATE)
    const updateLoadingState = useCallback((newState) => {
        setLoading(newState)
    },[])
    return [isLoading, updateLoadingState]
}