import React, { useCallback } from 'react'
import CartTotal from '../components/CartTotal'
import { connect, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import MessageCard from '../components/MessageCard'
import {Loader} from '../components/Loader'
import SingleItemCartCard from '../components/SingleItemCartCard'
import { Cart } from '../reducers/selectors/cart.selector'
import { useLoading } from '../customHooks/loading'
import { orderPlacedAction } from '../action'
import { orderNow } from '../fakeApiHelper'
import { EMPTY_ARRAY_LENGTH } from '../constants/globalConstants'

import "./style.css"

const renderSingleItemCartCard = order => <SingleItemCartCard key={order?.itemId} order={order} />

const CartPage = (props) => {
  const cart = useSelector(Cart)
  const [isLoading, updateLoadingState] = useLoading()
  const navigate = useNavigate()
  
  const {orderPlacedAction}=props
  
  const handleOrderNowClick = useCallback( async()=>{
      updateLoadingState(true)
      try{
          const status = await orderNow()
          if(status){
            orderPlacedAction()
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
  }, [orderPlacedAction, navigate, updateLoadingState])

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
              <CartTotal onClick={handleOrderNowClick} />
            </aside>
          </React.Fragment> : <MessageCard heading={`No item in cart.`} link={`/`} buttonText={`Add some item in cart`} /> }
      </div>
  )
}

const mapDisspatchToProps ={
  orderPlacedAction
}

export default connect(null,mapDisspatchToProps)(CartPage)