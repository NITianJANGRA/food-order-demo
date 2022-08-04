import React, { useCallback } from 'react'
import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types'


import TextButton from '../buttons/TextButton';
import CounterButton from '../buttons/CounterButton';
import { ItemInCart } from '../../reducers/selectors/cart.selector';
import { ProductById } from '../../reducers/selectors/products.selector';
import { addItemToCartAction, removeItemFromCartAction } from '../../action';
import { EMPTY_STRING } from '../../constants/globalConstants';

import "./style.css";

const SingleItemCard = (props) => {
    const {itemId, addItemToCartAction, removeItemFromCartAction} = props
    const item = useSelector(ProductById(itemId))
    const itemInCart = useSelector(ItemInCart(itemId))

    const handleAddItemToCart = useCallback(() => {
        addItemToCartAction(itemId)
    },[addItemToCartAction, itemId])
    
    const handleRemoveItemFromCart = useCallback(() => {
        removeItemFromCartAction(itemId)
    },[removeItemFromCartAction, itemId])

  return (
        <div className='card-container'>
            <div className="card">
                <div className="img-container">
                    <img className="card-image" src={item.img} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {item.name}
                    </h5>
                    <h6 className="card-subtitle">
                        {item.info}
                    </h6>
                    <hr />
                </div>
                <div className="card-footer">
                    <h5 className="card-price"> &#8377; {item.price} </h5>
                    {
                        itemInCart ? 
                        <CounterButton value={itemInCart.orderQuantity} handleIncrement={handleAddItemToCart} handleDecrement={handleRemoveItemFromCart} />
                        : 
                        <TextButton type='button' classes={["card-button"]} text="+ Add to Cart" onClick={handleAddItemToCart}  />
                    }
                </div>
            </div>
        </div> 
  )
}

SingleItemCard.defaultProps = {
    itemId : EMPTY_STRING
}

SingleItemCard.propTypes = {
    itemId : PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

const mapDispatchToProps = {
    addItemToCartAction,
    removeItemFromCartAction
}

export default connect(null,mapDispatchToProps)(SingleItemCard)