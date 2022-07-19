import React from 'react'
import CartTotal from '../../components/CartTotal'
import MessageCard from '../../components/MessageCard'
import LoaderHOC from '../../components/Loader'
import SingleItemCartCard from '../../components/SingleItemCartCard'
import { useStore } from '../../store/context'
import "./style.css"
const Cart = () => {
  const {state:{cart}} = useStore()

  return (
    <LoaderHOC >
      <div className="cart-container">
        {cart.length > 0 ?
          <React.Fragment>
            <section className="cart-item-list">
              {
                cart.map(order => <SingleItemCartCard key={order?.itemId} order={order} />)
              }
            </section>
            <aside className="cart-bill-container">        
              <CartTotal />
            </aside>
          </React.Fragment> : <MessageCard heading={`No item in cart.`} link={`/`} buttonText={`Add some item in cart`} /> }
      </div>
    </LoaderHOC>
  )
}

export default Cart