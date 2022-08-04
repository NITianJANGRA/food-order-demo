import React from 'react'
import PropTypes from "prop-types";

import TextButton from '../TextButton';
import { EMPTY_FUNCTION, EMPTY_STRING } from '../../../constants/globalConstants';

import "./style.css"

const FullWidthButton = (props) => {
    const { text, onClick} = props
  return (
    
    <TextButton classes={["full-width-btn"]} text={text} onClick={onClick} />
    
  )
}

FullWidthButton.defaultProps = {
  text : EMPTY_STRING,
  onButtonClick : EMPTY_FUNCTION
}

FullWidthButton.propTypes = {
  text : PropTypes.string,
  onButtonClick : PropTypes.func
}

export default React.memo(FullWidthButton)