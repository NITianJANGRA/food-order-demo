import React from 'react'
import { useStore } from '../../store/context'

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
    const {state:{products,cart}} =useStore()
    let totalAmount = 0
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
    </div>
  )
}

export default CartTotal