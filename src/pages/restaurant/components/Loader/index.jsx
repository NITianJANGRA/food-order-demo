import React from 'react'
import { useSelector } from 'react-redux'
import { Loading } from '../../reducers/selectors/loading.selector'
import "./style.css"

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  )
}

const LoaderHOC = ({children}) => {
  const isLoading = useSelector(Loading)
  return isLoading ? <Loader /> : children
}

export default LoaderHOC