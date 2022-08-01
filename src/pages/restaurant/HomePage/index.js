import React from 'react';
import { connect } from 'react-redux';

import { setLoaderAction, unsetLoaderAction, updateProductListAction } from '../action';
import { Loader } from '../components/Loader';
import SingleItemCard from '../components/singleItemCard';
import { fetchData } from '../reducers/helper';

import "./style.css";

class HomePage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isLoading : false,
    }
  }

  componentDidMount(){    
    const {products, updateProductList} = this.props
    
    if(Object.keys(products).length <= 0 ){
      this.setState({...this.state, isLoading:true})
      fetchData().then( data => {
        updateProductList(data)
        this.setState({...this.state, isLoading:false})
      } )
    }

  }

  render(){
    const {products} = this.props
    return (
      this.state.isLoading ? <Loader /> :
        <div className='product-list'>
            {
                [...Object.keys(products)].map((id)=> <SingleItemCard key={id} itemId={id} /> )
            }
        </div>
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
    updateProductList : (data) => dispatch(updateProductListAction(data)), 
  }
}

const HomePageContainer = connect(mapStateToProps,mapDispatchToProps)(HomePage)

export default HomePageContainer