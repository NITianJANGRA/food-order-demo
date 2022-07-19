import React, { useEffect } from 'react'
import LoaderHOC from '../../components/Loader';
import SingleItemCard from '../../components/singleItemCard';
import { useStore } from '../../store/context'
import { fetchData } from '../../store/helper';

import "./style.css";

const Home = () => {
  const {state:{products}, ACTIONS} = useStore();
  useEffect(()=>{
    // IIFE
    (async ()=>{
      ACTIONS.setLoader()
      if(Object.keys(products).length <= 0 ){
        const data = await fetchData()
        ACTIONS.updateProductList(data)
      }
      ACTIONS.unsetLoader()
    })()
  },[])    
  return (
    <LoaderHOC>
      <div className='product-list'>
          {
              [...Object.keys(products)].map((id)=> <SingleItemCard key={id} item={products[id]}  itemId={id} /> )
          }
      </div>
    </LoaderHOC>
  )
}

export default Home