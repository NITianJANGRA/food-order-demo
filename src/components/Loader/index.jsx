import React from 'react'
import { useStore } from '../../store/context'
import "./style.css"

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  )
}

const LoaderHOC = ({children}) => {
  const {state:{isLoading}} = useStore()

  return isLoading ? <Loader /> : children
}

export default LoaderHOC