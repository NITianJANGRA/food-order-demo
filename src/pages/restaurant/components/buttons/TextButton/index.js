import React from 'react'
import PropTypes from 'prop-types';

import { DEFAULT_PROP } from '../../../constants/globalConstants';

import "./style.css"

// Created a customizable component.
// used directly in SingleItemCard
// used as building block for CounterButton 

const TextButton = (props) => {
    const { text, classes, type, onButtonClick} = props
    const externalClass = classes.join(' ')
  return (
    
    <button className={`text-btn ${externalClass}`} type={type} onClick={onButtonClick} > {text}</button>
    
  )
}

TextButton.defaultProps = {
  text : DEFAULT_PROP.string,
  classes : DEFAULT_PROP.array,
  type : DEFAULT_PROP.string,
  onButtonClick : DEFAULT_PROP.func,
}

TextButton.propTypes = {
  text : PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
  classes : PropTypes.arrayOf(PropTypes.string),
  type : PropTypes.string,
  onButtonClick : PropTypes.func,
}

export default TextButton