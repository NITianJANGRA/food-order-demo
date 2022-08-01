import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Products } from '../../reducers/selectors/products.selector'
import { Cart } from '../../reducers/selectors/cart.selector'
import FullWidthButton from '../buttons/FullWidthButton'
import PropTypes from 'prop-types'
import "./style.css"

const AmountDetail = ({itemName, amount}) => {
    return (
        <div className="price-row-container">
            <div className="price-row-detail">{itemName}</div>
            <div className="price-row-amount">{amount}</div>
        </div>
    )
}

AmountDetail.propTypes = {
    itemName : PropTypes.string,
    amount : PropTypes.number
}


const CartTotal = (props) => {
    
    const products = useSelector(Products)
    const cart = useSelector(Cart)

    let totalAmount = 0
    const {handleOrderNowClick} = props

    const mapCartItems = useCallback((order)=>{
        const product = products[order.itemId]
        const currentTotalAmount = parseInt(product.price) * order.orderQuantity
        totalAmount += currentTotalAmount
        return <AmountDetail key={order.itemId} itemName={product?.name} amount={currentTotalAmount} />                    
    },[products, cart])

  return (
    <div className='bill-container'>
        <div className="order-amount">
            {cart.map(mapCartItems)}
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