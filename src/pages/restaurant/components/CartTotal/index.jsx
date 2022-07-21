import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../action'
import { orderNow } from '../../reducers/helper'
import { Products } from '../../reducers/selectors/products.selector'
import { Cart } from '../../reducers/selectors/cart.selector'
import FullWidthButton from '../buttons/FullWidthButton'

import "./style.css"

const AmountDetail = ({itemName, amount}) => {
    return (
        <div className="price-row-container">
            <div className="price-row-detail">{itemName}</div>
            <div className="price-row-amount">{amount}</div>
        </div>
    )
}

const CartTotal = () => {
    const ACTIONS = useActions()
    const products = useSelector(Products)
    const cart = useSelector(Cart)
    let totalAmount = 0
    const navigate = useNavigate();
    const handleOrderNowClick = async()=>{
        ACTIONS.setLoader()
        try{
            const status = await orderNow()
            if(status){
                ACTIONS.orderPlaced()
                navigate("/orderSuccess")
            }else{
                navigate("/orderError")
            }
        }catch(err){
            console.error(err)
            navigate("/orderError")
        }
        ACTIONS.unsetLoader()
    }

  return (
    <div className='bill-container'>
        <div className="order-amount">
            {cart.map((order)=>{
                const product = products[order.itemId]
                const currentTotalAmount = product.price * order.orderQuantity
                totalAmount += currentTotalAmount
                return <AmountDetail key={order.itemId} itemName={product?.name} amount={currentTotalAmount} />                    
            })}
        </div>
        <hr />
        <div className="final-amount">
            <AmountDetail itemName={'Total Amount : '} amount={totalAmount} />
        </div>
        <div className='order-now'>
            <FullWidthButton text={`Order Now`} onButtonClick={handleOrderNowClick} />
        </div>
    </div>
  )
}

export default CartTotal