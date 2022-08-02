import React from 'react'
import PropTypes from "prop-types";

import TextButton from '../TextButton';
import { DEFAULT_PROP } from '../../../constants/globalConstants';

import "./style.css"

const FullWidthButton = (props) => {
    const { text, onButtonClick} = props
  return (
    
    <TextButton classes={["full-width-btn"]} text={text} onButtonClick={onButtonClick} />
    
  )
}

FullWidthButton.defaultProps = {
  text : DEFAULT_PROP.string,
  onButtonClick : DEFAULT_PROP.func
}

FullWidthButton.propTypes = {
  text : PropTypes.string,
  onButtonClick : PropTypes.func
}

export default React.memo(FullWidthButton)