import React, { useCallback } from 'react'
import { useSelector,connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addItemToCartAction, removeItemFromCartAction } from '../../action'
import { ProductById } from '../../reducers/selectors/products.selector'
import CounterButton from '../buttons/CounterButton'
import { EMPTY_OBJECT } from '../../constants/globalConstants'

import "./style.css"

const SingleItemCartCard = (props) => {
    const {order,addItemToCartAction, removeItemFromCartAction} = props
    const item = useSelector(ProductById(order.itemId))
    
    const handleAddItemToCart = useCallback(() => {
        addItemToCartAction(order.itemId)
    },[addItemToCartAction, order])

    const handleRemoveItemFromCart = useCallback(() => {
        removeItemFromCartAction(order.itemId)
    },[removeItemFromCartAction, order])

  return (
        <div className='order-container'>
            <div className="order-card">
                <div className="order-img-container">
                    <img className="order-image" src={item.img} />
                </div>
                <div className="order-body">
                    <h5 className="order-title">
                        {item.name}
                    </h5>
                    <h6 className="order-subtitle">
                        {item.info}
                    </h6>
                    <div className="order-body-footer">
                        <h5 className="order-price"> &#8377; {item.price} </h5>
                        <CounterButton value={order.orderQuantity} handleIncrement={handleAddItemToCart} handleDecrement={handleRemoveItemFromCart} />
                    </div>
                    <hr className="hr-divider" />
                    <div className="final-price">
                        <h5 className="order-title">{`Total :`}</h5>
                        <h5 className="order-title">{item.price * order.orderQuantity }</h5>
                    </div>
                </div>
            </div>
        </div>
  )
}

SingleItemCartCard.defaultProps = {
    order : EMPTY_OBJECT
}

SingleItemCartCard.propTypes = {
    order : PropTypes.object
}

const mapDispatchToProps = {
    addItemToCartAction,
    removeItemFromCartAction
}

export default connect(null,mapDispatchToProps)(SingleItemCartCard)