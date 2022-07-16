import React from 'react'
import { useStore } from '../../store/context'
import CounterButton from '../buttons/CounterButton'

import "./style.css"

const SingleItemCartCard = ({order}) => {
    const {state:{products}, ACTIONS} = useStore()
    const item = products[order.itemId]
    const handleAddItemToCart = () => {
        ACTIONS.addItemToCart(order.itemId)
    }
    const handleRemoveItemFromCart = () => {
        ACTIONS.removeItemFromCart(order.itemId)
    }
  return (
    item ?
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
                    {/* <hr /> */}
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
        </div> : null
  )
}

export default SingleItemCartCard