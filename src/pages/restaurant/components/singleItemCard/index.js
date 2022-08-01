import React, { useCallback } from 'react'
import TextButton from '../buttons/TextButton';
import CounterButton from '../buttons/CounterButton';
import "./style.css";
import { useSelector } from 'react-redux';
import { ItemInCart } from '../../reducers/selectors/cart.selector';
import { ProductById } from '../../reducers/selectors/products.selector';
import { useActions } from '../../action';

const SingleItemCard = ({itemId}) => {
    const item = useSelector(ProductById(itemId))
    const itemInCart = useSelector(ItemInCart(itemId))
    const ACTIONS = useActions()

    const handleAddItemToCart = useCallback(() => {
        ACTIONS.addItemToCart(itemId)
    },[ACTIONS, itemId])
    
    const handleRemoveItemFromCart = useCallback(() => {
        ACTIONS.removeItemFromCart(itemId)
    },[ACTIONS, itemId])

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
                        <TextButton type='button' classes={["card-button"]} text="+ Add to Cart" onButtonClick={handleAddItemToCart}  />
                    }
                </div>
            </div>
        </div> 
  )
}

export default SingleItemCard