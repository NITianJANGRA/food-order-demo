import React from 'react'
import TextButton from '../TextButton';
import PropTypes from "prop-types";
import "./style.css"

const FullWidthButton = (props) => {
    const { text, onButtonClick} = props
  return (
    
    <TextButton classes={["full-width-btn"]} text={text} onButtonClick={onButtonClick} />
    
  )
}

FullWidthButton.propTypes = {
  text : PropTypes.string,
  onButtonClick : PropTypes.func
}

export default React.memo(FullWidthButton)