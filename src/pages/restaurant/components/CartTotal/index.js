import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { Products } from '../../reducers/selectors/products.selector'
import { Cart } from '../../reducers/selectors/cart.selector'
import FullWidthButton from '../buttons/FullWidthButton'
import { DEFAULT_NUMBER, EMPTY_FUNCTION, EMPTY_STRING } from '../../constants/globalConstants'

import "./style.css"
import { getCartTotalPrice, getTotalAmount } from './helper'



const AmountDetail = ({itemName, amount}) => {
    return (
        <div className="price-row-container">
            <div className="price-row-detail">{itemName}</div>
            <div className="price-row-amount">{amount}</div>
        </div>
    )
}

const listCartItems = products => order => <AmountDetail key={order.itemId} itemName={products[order.itemId].name} amount={getTotalAmount(order, products[order.itemId])} />

const CartTotal = (props) => {
    
    const products = useSelector(Products)
    const cart = useSelector(Cart)

    let totalAmount = useMemo(()=>getCartTotalPrice(cart,products),[cart,products])
    const {onClick} = props

  return (
    <div className='bill-container'>
        <div className="order-amount">
            {cart.map(listCartItems(products))}
        </div>
        <hr />
        <div className="final-amount">
            <AmountDetail itemName={'Total Amount : '} amount={totalAmount} />
        </div>
        <div className='order-now'>
            <FullWidthButton text={`Order Now`} onClick={onClick} />
        </div>
    </div>
  )
}
AmountDetail.defaultProps = {
    itemName : EMPTY_STRING,
    amount : DEFAULT_NUMBER
}

AmountDetail.propTypes = {
    itemName : PropTypes.string,
    amount : PropTypes.number
}

CartTotal.defaultProps = {
    handleOrderNowClick : EMPTY_FUNCTION
}

CartTotal.propTypes = {
    handleOrderNowClick : PropTypes.func,
}

export default CartTotal