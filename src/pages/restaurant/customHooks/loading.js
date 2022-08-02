import { useCallback, useState } from "react"

const INITIAL_LOADING_STATE = false

export const useLoading = ()=>{
    const [isLoading, setLoading] = useState(INITIAL_LOADING_STATE)
    const updateLoadingState = useCallback( newState => setLoading(newState) ,[])
    return [isLoading, updateLoadingState]
}