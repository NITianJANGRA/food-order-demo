import React from 'react';
import { connect } from 'react-redux';

import { updateProductListAction } from '../action';
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

  fetchProductDataCallBack = (data) => {
    const {updateProductList} = this.props
    updateProductList(data)
    this.setState({ isLoading:false})
  }

  getProductData = ()=>{
    const {products} = this.props
    
    if(Object.keys(products).length <= 0 ){
      this.setState({ isLoading:true})
      fetchData().then(this.fetchProductDataCallBack)
    }
  }
  componentDidMount(){    
    this.getProductData()
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
  const updateProductList = data => dispatch(updateProductListAction(data))
  return {
    updateProductList 
  }
}

const HomePageContainer = connect(mapStateToProps,mapDispatchToProps)(HomePage)

export default HomePageContainer