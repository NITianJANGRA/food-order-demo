import React from 'react'
import { useStore } from '../../store/context';
import TextButton from '../buttons/TextButton';
import CounterButton from '../buttons/CounterButton';
import "./style.css";
const SingleItemCard = ({itemId}) => {
    const {state:{products, cart},ACTIONS} = useStore()
    const item = products[itemId]
    const itemInCart = cart.find((order)=> order?.itemId === itemId)

    const handleAddItemToCart = () => {
        ACTIONS.addItemToCart(itemId)
    }
    const handleRemoveItemFromCart = () => {
        ACTIONS.removeItemFromCart(itemId)
    }

  return (
    item ?
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
                        : <TextButton type='button' classes={["card-button"]} text="+ Add to Cart" onButtonClick={handleAddItemToCart}  />
                        
                    }
                </div>
            </div>
        </div> : null
  )
}

export default SingleItemCard