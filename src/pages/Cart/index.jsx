import React from 'react'
import CartTotal from '../../components/CartTotal'
import EmptyCart from '../../components/EmptyCart'
import SingleItemCartCard from '../../components/SingleItemCartCard'
import { useStore } from '../../store/context'
import "./style.css"
const Cart = () => {
  const {state:{cart}} = useStore()

  return (
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
        </React.Fragment> : <EmptyCart /> }
    </div>

  )
}

export default Cart