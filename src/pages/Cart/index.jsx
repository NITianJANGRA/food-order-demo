import React from 'react'
import CartTotal from '../../components/CartTotal'
import SingleItemCartCard from '../../components/SingleItemCartCard'
import { useStore } from '../../store/context'
import "./style.css"
const Cart = () => {
  const {state:{cart}} = useStore()
  return (
    <div className="cart-container">
      <section className="cart-item-list">
        {
          cart.map(order => <SingleItemCartCard key={order.itemId} order={order} />)
        }
      </section>
      <aside className="cart-bill-container">        
        <CartTotal />
      </aside>
    </div>

  )
}

export default Cart