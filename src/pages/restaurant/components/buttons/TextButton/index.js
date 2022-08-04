import React from 'react'
import PropTypes from 'prop-types';

import { EMPTY_ARRAY, EMPTY_FUNCTION, EMPTY_STRING } from '../../../constants/globalConstants';

import "./style.css"

// Created a customizable component.
// used directly in SingleItemCard
// used as building block for CounterButton 

const TextButton = (props) => {
    const { text, classes, type, onClick} = props
    const externalClass = classes.join(' ')
  return (
    
    <button className={`text-btn ${externalClass}`} type={type} onClick={onClick} > {text}</button>
    
  )
}

TextButton.defaultProps = {
  text : EMPTY_STRING,
  classes : EMPTY_ARRAY,
  type : EMPTY_STRING,
  onButtonClick : EMPTY_FUNCTION,
}

TextButton.propTypes = {
  text : PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
  classes : PropTypes.arrayOf(PropTypes.string),
  type : PropTypes.string,
  onButtonClick : PropTypes.func,
}

export default TextButton