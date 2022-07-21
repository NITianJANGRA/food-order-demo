import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useActions } from '../action';
import LoaderHOC from '../components/Loader';
import SingleItemCard from '../components/singleItemCard';
import { fetchData } from '../reducers/helper';
import { Products } from '../reducers/selectors/products.selector';

import "./style.css";

const HomePage = () => {
  const products = useSelector(Products)
  const ACTIONS = useActions()

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
              [...Object.keys(products)].map((id)=> <SingleItemCard key={id} itemId={id} /> )
          }
      </div>
    </LoaderHOC>
  )
}

export default HomePage