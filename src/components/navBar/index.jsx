import React from 'react';
import {Link} from 'react-router-dom'
import { useStore } from '../../store/context';
import {AiOutlineShoppingCart} from "react-icons/ai";

import './style.css';


const NavBar = () => {
  const {state:{cart}} = useStore()
  const count = cart.length
  return (
    <nav>
        <Link to="/" > <img className='logo' src="/images/logo.png" alt="LOGO"  /> </Link>
        <div className="cart-link">
          {/* <Link to="/" > Home </Link> */}
          <Link to="/cart" > <AiOutlineShoppingCart /> <span className='order-count'>{count}</span></Link>
        </div>
        {/* <a >LOGO</a> */}
        {/* <a href="/cart">CART</a> */}
    </nav>
  )
}

export default NavBar