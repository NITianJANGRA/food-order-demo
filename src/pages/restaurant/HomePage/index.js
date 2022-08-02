import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { updateProductList } from '../action';
import { Loader } from '../components/Loader';
import SingleItemCard from '../components/singleItemCard';
import { DEFAULT_PROP, EMPTY_ARRAY_LENGTH } from '../constants/globalConstants';
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
                [...Object.keys(products)].map((id)=> <SingleItemCard key={id} itemId={id} /> )
            }
        </div>
    )
    }
}


const mapStateToProps = (state) => ({products : state?.products})

const mapDispatchToProps = (dispatch) => ({updateProductList : updateProductList(dispatch)})

const HomePageContainer = connect(mapStateToProps,mapDispatchToProps)(HomePage)

HomePage.defaultProps = {
  updateProductList : DEFAULT_PROP.func,
  products : DEFAULT_PROP.object
}

HomePage.propTypes ={
  updateProductList : PropTypes.func,
  products : PropTypes.object
}

export default HomePageContainer