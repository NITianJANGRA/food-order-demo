import React from 'react'
import { useStore } from '../../store/context';
import TextButton from '../buttons/TextButton';
import "./style.css";
const SingleItemCard = ({itemId}) => {
    const {state:{products},ACTIONS} = useStore()
    const item = products[itemId]
    const handleAddItemToCart = () => {
        ACTIONS.addItemToCart(itemId)
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
                    <TextButton type='button' classes={["card-button"]} text="+ Add to Cart" onButtonClick={handleAddItemToCart}  />
                </div>
            </div>
        </div> : null
  )
}

export default SingleItemCard