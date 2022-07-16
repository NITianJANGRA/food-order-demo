import React from 'react'
import { Link } from 'react-router-dom'
import TextButton from '../buttons/TextButton'
import "./style.css"
const EmptyCart = () => {
  return (
    <div>
        <div className="empty-cart">

        

        <h3>No item in cart.</h3>
        <Link to={"/"}>
        <TextButton classes={["link-to-home"]} text={"Add some item in cart"} />
         
        </Link>
        </div>
    </div>
  )
}

export default EmptyCart