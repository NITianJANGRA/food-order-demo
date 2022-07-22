import React from 'react';
import { connect } from 'react-redux';

import { setLoaderAction, unsetLoaderAction, updateProductListAction } from '../action';
import LoaderHOC from '../components/Loader';
import SingleItemCard from '../components/singleItemCard';
import { fetchData } from '../reducers/helper';

import "./style.css";

class HomePage extends React.Component {

  componentDidMount(){    
    const {products, setLoader, updateProductList, unsetLoader} = this.props
    
    if(Object.keys(products).length <= 0 ){
      setLoader()
      fetchData().then( data => {
        updateProductList(data)
        unsetLoader()
      } )
    }

  }

  render(){
    const {products} = this.props
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
}


const mapStateToProps = (state) => {
  return {
    products : state.products,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoader : () => dispatch(setLoaderAction()),
    unsetLoader : () => dispatch(unsetLoaderAction()),
    updateProductList : (data) => dispatch(updateProductListAction(data)), 
  }
}

const HomePageContainer = connect(mapStateToProps,mapDispatchToProps)(HomePage)

export default HomePageContainer