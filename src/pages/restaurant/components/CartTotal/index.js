import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { Products } from '../../reducers/selectors/products.selector'
import { Cart } from '../../reducers/selectors/cart.selector'
import FullWidthButton from '../buttons/FullWidthButton'
import { DEFAULT_PROP } from '../../constants/globalConstants'

import "./style.css"

const getTotalAmount = (cartItem, productDetails) => cartItem.orderQuantity * parseInt(productDetails.price)

const getCartTotalPrice = (cartList, productList) => cartList.reduce((total,cartItem) => total += getTotalAmount(cartItem, productList[cartItem.itemId]) ,0)

const mapCartItems = (order,products)=> <AmountDetail key={order.itemId} itemName={products[order.itemId].name} amount={getTotalAmount(order, products[order.itemId])} />

const AmountDetail = ({itemName, amount}) => {
    return (
        <div className="price-row-container">
            <div className="price-row-detail">{itemName}</div>
            <div className="price-row-amount">{amount}</div>
        </div>
    )
}

const CartTotal = (props) => {
    
    const products = useSelector(Products)
    const cart = useSelector(Cart)

    let totalAmount = useMemo(()=>getCartTotalPrice(cart,products),[cart,products])
    const {handleOrderNowClick} = props

  return (
    <div className='bill-container'>
        <div className="order-amount">
            {cart.map(order =>mapCartItems(order,products))}
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
AmountDetail.defaultProps = {
    itemName : DEFAULT_PROP.string,
    amount : DEFAULT_PROP.int
}

AmountDetail.propTypes = {
    itemName : PropTypes.string,
    amount : PropTypes.number
}

CartTotal.defaultProps = {
    handleOrderNowClick : DEFAULT_PROP.func
}

CartTotal.propTypes = {
    handleOrderNowClick : PropTypes.func,
}

export default CartTotal