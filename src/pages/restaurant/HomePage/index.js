import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { updateProductListAction } from '../action';
import { Loader } from '../components/Loader';
import SingleItemCard from '../components/singleItemCard';
import { EMPTY_ARRAY_LENGTH, EMPTY_FUNCTION, EMPTY_OBJECT } from '../constants/globalConstants';
import { fetchData } from '../fakeApiHelper';

import "./style.css";

const mapSingleCartItem = (id)=> <SingleItemCard key={id} itemId={id} />
class HomePage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isLoading : false,
    }
  }
  fetchProductDataCallBack = (data) => {
    const {updateProductListAction} = this.props
    updateProductListAction(data)
    this.setState({ isLoading:false})
  }

  getProductData = ()=>{
    const {products} = this.props
    
    if(Object.keys(products).length === EMPTY_ARRAY_LENGTH ){
      this.setState({ isLoading:true})
      fetchData().then(this.fetchProductDataCallBack)
    }
  }
  componentDidMount(){    
    this.getProductData()
  }

  render(){
    const {products} = this.props
    const {isLoading} = this.state
    return (
      isLoading ? <Loader /> :
        <div className='product-list'>
            {
                [...Object.keys(products)].map(mapSingleCartItem)
            }
        </div>
    )
    }
}


const mapStateToProps = (state) => ({products : state?.products})

const mapDispatchToProps = {updateProductListAction}

const HomePageContainer = connect(mapStateToProps,mapDispatchToProps)(HomePage)

HomePage.defaultProps = {
  updateProductListAction : EMPTY_FUNCTION,
  products : EMPTY_OBJECT
}

HomePage.propTypes ={
  updateProductListAction : PropTypes.func,
  products : PropTypes.object
}

export default HomePageContainer