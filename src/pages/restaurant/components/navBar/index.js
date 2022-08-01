import React from 'react';
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from "react-icons/ai";

import './style.css';
import { useSelector } from 'react-redux';
import { CartCount } from '../../reducers/selectors/cart.selector';


const NavBar = () => {
  const count =  useSelector(CartCount)
  return (
    <nav>
        <Link to="/" > <img className='logo' src="/images/logo.png" alt="LOGO"  /> </Link>
        <div className="cart-link">
          <Link to="/cart" > <AiOutlineShoppingCart /> <span className='order-count'>{count}</span></Link>
        </div>
    </nav>
  )
}

export default NavBar