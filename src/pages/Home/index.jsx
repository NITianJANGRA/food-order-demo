import React from 'react'
import SingleItemCard from '../../components/singleItemCard';
import { useStore } from '../../store/context'

import "./style.css";

const Home = () => {
  const {state:{products}} = useStore();    
  return (
    <div className='product-list'>
        {
            [...Object.keys(products)].map((id)=> <SingleItemCard key={id} item={products[id]}  itemId={id} /> )
        }
    </div>
  )
}

export default Home