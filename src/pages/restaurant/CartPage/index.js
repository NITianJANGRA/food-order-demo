import React, { useCallback } from 'react'
import CartTotal from '../components/CartTotal'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import MessageCard from '../components/MessageCard'
import {Loader} from '../components/Loader'
import SingleItemCartCard from '../components/SingleItemCartCard'
import { Cart } from '../reducers/selectors/cart.selector'
import { useLoading } from '../customHooks/loading'
import { useActions } from '../action'
import { orderNow } from '../reducers/helper'
import { EMPTY_ARRAY_LENGTH } from '../constants/globalConstants'

import "./style.css"
const CartPage = () => {
  const cart = useSelector(Cart)
  const [isLoading, updateLoadingState] = useLoading()
  const ACTIONS = useActions()
  const navigate = useNavigate()
  
  const renderSingleItemCartCard = order => <SingleItemCartCard key={order?.itemId} order={order} />
  
  const handleOrderNowClick = useCallback( async()=>{
      updateLoadingState(true)
      try{
          const status = await orderNow()
          if(status){
              ACTIONS.orderPlaced()
              navigate("/orderSuccess")
          }else{
              navigate("/orderError")
          }
      }catch(err){
          updateLoadingState(false)
          console.error(err)
          navigate("/orderError")
      }
      updateLoadingState(false)
  }, [ACTIONS, updateLoadingState])

  return (
    isLoading ? <Loader /> :
      <div className="cart-container">
        {cart.length > EMPTY_ARRAY_LENGTH ?
          <React.Fragment>
            <section className="cart-item-list">
              {
                cart.map(renderSingleItemCartCard)
              }
            </section>
            <aside className="cart-bill-container">        
              <CartTotal handleOrderNowClick={handleOrderNowClick} />
            </aside>
          </React.Fragment> : <MessageCard heading={`No item in cart.`} link={`/`} buttonText={`Add some item in cart`} /> }
      </div>
  )
}

export default CartPage